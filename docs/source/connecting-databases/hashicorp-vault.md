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
            serviceAccount: schemahero-vault
            serviceAccountNamespace: schemahero-vault
            secret: my-db
            role: schemahero
            agentInject: false
```

| name | description |
|------|-------------|
| `endpoint` | The http(s) endpoint of the vault API. This must be supplied in a way that's accessible from the namespace where the `Database` object is deployed |
| `seviceAccount` | The Kubernetes Service Account to use to authenticate with Vault |
| `serviceAccountNamespace` | The namespace that the `serviceAccount` is located in |
| `secret` | The name of the Vault secret to retreive |
| `role` | The role to use with Vault |
| `agentInject` | A boolean indicating if we should use the sideca agent injection or integrate directly with the Vault API. |

## Agent Injector vs Vault API

SchemaHero supports integrating with Vault using the [Agent Sidecar Injector](https://www.vaultproject.io/docs/platform/k8s/injector) or a direct integration with the Vault API.

### Vault API

In most environments it's preferable to use the vault api and disable the `agentInject` attribute in the configuration.
When using templates in Vault to build a connection string, the SchemaHero integration with the Vault API will read the template from the Vault database and use it to create the connection string.
The Agent Injector does not support injecting the connection string, and must be configured separately.
When using the Vault API, a new secret is requested from Vault for each query (plan, apply).

### Agent Injector
When the `agentInject` attribute is enabled, the `endpoint`, `serviceAccount` and `serviceAccountNamespace` parameters are optional.
In this mode SchemaHero will simply add annotation to the Database controller to allow the Vault Sidecar Injector to add the secret via a mutating webhook admission controller.
When using the Agent Injector option, the same secret is used for the lifetime of the controller.
