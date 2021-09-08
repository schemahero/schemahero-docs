---
title: Connecting
description: Connecting SchemaHero to a SQLite database
---


The following parameters are supported when connecting to SQLite:

| Name | Description |
|------|-------------|
| `dsn` | A string containing the DSN to connect to. |

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-database
spec:
  connection:
    sqlite:
      dsn: sqlite:/opt/databases/mydb.sq3
```
