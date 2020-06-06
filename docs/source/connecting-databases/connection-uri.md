---
title: Connection URI
description: Connection URI
---

The recommended way to connect to a database is by using a connection URI. When using a connection string, SchemaHero will pass all parameters through to the database driver, allowing you to have full control over the database connection environment.

For example, to connect to a Postgres database, you can deploy a Database custom resource like this:

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-pg
spec:
  connection:
    postgres:
      uri:
        value: postgres://username:password@host:5432/db_name
```

Covered in the next page is how to use a Kubernetes Secret to provide this connection string.

