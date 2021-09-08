---
title: HashiCorp Vault
description: Dynamic Credentials Using HashiCorp Vault
---

SchemaHero can be configured to use HashiCorp Vault to retrieve database credentials at runtime.

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-db
  namespace: namespace
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          vault:
            endpoint: http://<vault-endpoint>:8200
            connectionTemplate: postgres://{{ .username }}:{{ .password }}@postgres:5432/my-db
            serviceAccount: schemahero-vault
            serviceAccountNamespace: schemahero-vault
            secret: my-db
            role: schemahero
            agentInject: false
            kubernetesAuthEndpoint: /v1/auth/kubernetes_custom/login
```

| name | description |
|------|-------------|
| `endpoint` | The http(s) endpoint of the vault API. This must be supplied in a way that's accessible from the namespace where the `Database` object is deployed |
| `seviceAccount` | The Kubernetes Service Account to use to authenticate with Vault |
| `serviceAccountNamespace` | The namespace that the `serviceAccount` is located in |
| `secret` | The name of the Vault secret to retreive |
| `role` | The role to use with Vault |
| `agentInject` | A boolean indicating if we should use the sidecar agent injection or integrate directly with the Vault API. |
| `connectionTemplate` | The Go template to use to form the connection URI. Will use a DB default if not specified |
| `kubernetesAuthEndpoint` | The Vault Kubernetes Authentication endpoint to use if this was enabled at a different path to the default. See [here](https://www.vaultproject.io/docs/auth/kubernetes#via-the-api) for more info |

## Agent Injector vs Vault API

SchemaHero supports integrating with Vault using the [Agent Sidecar Injector](https://www.vaultproject.io/docs/platform/k8s/injector) or a direct integration with the Vault API.

### Vault API

In most environments it's preferable to use the vault api and disable the `agentInject` attribute in the configuration.
When using templates in Vault to build a connection string, the SchemaHero integration with the Vault API will read the template from the Vault database, and use it to create the connection string, unless a Go template is passed via the `connectionTemplate` parameter.
The Agent Injector does not support injecting the connection string, and must be configured separately.
When using the Vault API, a new secret is requested from Vault for each query (plan, apply).

### Agent Injector
When the `agentInject` attribute is enabled, the `endpoint`, `serviceAccount`, and `serviceAccountNamespace` parameters are optional.
In this mode, SchemaHero will simply add annotation to the Database controller to allow the Vault Sidecar Injector to add the secret via a mutating webhook admission controller.

When the `agentInject` attribute is enabled, the `endpoint`, `serviceAccount`, `connectionTemplate` and `serviceAccountNamespace` parameters are optional, `kubernetesAuthEndpoint` is ignored.
In this mode, SchemaHero will simply add annotation to the Database controller to allow the Vault Sidecar Injector to add the secret via a mutating webhook admission controller. If `connectionTemplate` is specified if will form the Go template that's wrapped in a Consul template in the [agent-inject-template](https://www.vaultproject.io/docs/platform/k8s/injector/annotations#vault-hashicorp-com-agent-inject-template) annotation.
As an example, having your Database object configured with:
```
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          vault:
            connectionTemplate: postgres://{{ .username }}:{{ .password }}@postgres:5432/my-db
            secret: my-db
```
you would end up with a Pod annotated with:
```
        vault.hashicorp.com/agent-inject-template-my-db: |
          {{- with secret "database/creds/my-db" -}}
          postgres://{{ .username }}:{{ .password }}@postgres:5432/my-db
          {{- end }}
```
where `my-db` is the configured secret and `postgres://{{ .username }}:{{ .password }}@postgres:5432/my-db` is the configured connectionTemplate.

When using the Agent Injector option, the same secret is used for the lifetime of the controller.
