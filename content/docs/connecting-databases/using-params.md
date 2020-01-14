---
date: 2019-05-25
linktitle: "Using params"
title: Using params
weight: 30040
---

Finally, it's possible to connect to a database using parameters defined in YAML, if connection strings are not desirable.

An exmaple of connecting to postgres database using parameters is:

```yaml
apiVersion: databases.schemahero.io/v1alpha2
kind: Database
metadata:
  name: my-db
connection:
  postgres:
    host:
      value: postgres
    user:
      value: username
    password:
      value: password
    port:
      value: 5432
    dbname:
      value: db_name
```

Once again, it's possible to deliver sensitive fields using a Kubernetes secret, as in:

```yaml
apiVersion: databases.schemahero.io/v1alpha2
kind: Database
metadata:
  name: my-db
connection:
  postgres:
    host:
      value: postgres
    user:
      value: username
    password:
      valueFrom:
        secretKeyRef:
          name: postgres
          key: password
    port:
      value: 5432
    dbname:
      value: db-name
```
