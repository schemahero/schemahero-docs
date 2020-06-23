---
title: HashiCorp Vault Integration
description: Using SchemaHero with HashiCorp Vault
---

SchemaHero can use [HashiCorp Vault](https://vaultproject.io) to generate and use dynamic, short-lived credentials when connecting to the database.
SchemaHero has two different methods of integrating with Vault:

1. Vault Agent Injection
2. Direct Vault API

## Vault Agent Injection

If Vault is configured to support the native [agent sidecar injector](https://www.vaultproject.io/docs/platform/k8s/injector) service, this is simple to enable on a SchemaHero Database resource.
Enable Vault secret injection by setting the `vault` properties on the Database connection, as in:

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-database
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          vault:
            agentInject: true
            role: schemahero
            secret: airlinedb
```

In the Database manifest above, note the properties of the `vault` key:

**agentInject**: Setting this to true will instruct SchemaHero to write the Vault annotations to the Table and Migration reconcile objects.

**role**: Set this to the Vault role.
This is the same value can can be used in a command such as `vault read database/creds/<role>

**secret**: 

## Direct Vault API

For advanced use cases, or environments where the Vault Agent Sidecar Injector is not available, it's also possible to have SchemaHero connect directly with the Vault HTTP API.
In this scenario, SchemaHero will read the `ServiceAccount` and `Secret` to get the Vault JWT token, and communicate with Vault to retrieve and render the connection string.

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: airlinedb
  namespace: schemahero-vault
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          vault:
            endpoint: http://vault.default.svc.cluster:8200
            serviceAccount: schemahero
            serviceAccountNamespace: schemahero
            secret: airlinedb
            role: schemahero
```

To enable the direct Vault API, a few keys are required:

**endpoint**: The endpoint to the Vault service.
This should be written as resolvable from the SchemaHero Database controller.
If Vault is running in the same cluster but a different namespace than SchemaHero, this should generally be written as a FQDN using the CoreDNS resolver.

**serviceAccount**: The Kubernetes service account that SchemaHero should use. 
This should already be deployed, as part of the Vault deployment.

**serviceAccountNamespace**: The namespace that the Kubernetes service account is deployed in.
