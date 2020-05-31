---
title: Database Resources
description: Database Resources
---

Before deploying database tables and schemas, a database object must be deployed. 
The CRD for databases defines an object that can be referenced in tables and migrations.

This makes it easier to deploy schemas so that the credentials and database connection string doesn't have to be included in every schema migration that's deployed.

When a database object is deployed, the operator will attempt to connect to it using the credentials provided.

## Example

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: testdb
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          secretKeyRef:
            name: postgresql-secret
            key: uri
```

## Full Reference

The database object supports additional fields for advanced use cases such as limiting the nodes that migration plan and apply steps will be scheduled on, using internally hosted versions of SchemaHero and more.
See the [reference](/reference/v1alpha4/database) for all supported fields.