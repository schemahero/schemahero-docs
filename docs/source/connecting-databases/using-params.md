---
title: Using Params
description: Using Params
---

Finally, it's possible to connect to a database using parameters defined in YAML, if connection strings are not desirable.

An exmaple of connecting to postgres database using parameters is:

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-db
spec:
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
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-db
spec:
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
