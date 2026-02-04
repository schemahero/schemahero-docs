---
title: Using Params
description: Connecting using individual parameters
---

Finally, it's possible to connect to a database using parameters defined in YAML, if connection strings are not desirable.
When using this method, SchemaHero will create a connection string from the parameters provided.

The following fields are supported:

| Field | Description |
|-------|------------------|
| `host` | The hostname to SchemaHero should use to connect to the database. This must be resolvable from the namespace that the database object is deployed to |
| `port` | The port that the database server is accepting connections on |
| `user` | The username to use when connecting to the database |
| `password` | The password to use when onnecting to the database |
| `dbname` | The name of the database to connect to |

## PostgreSQL and CockroachDB

In addition to the fields above, PostgreSQL and CockroachDB connections support the following parameters:

| Field | Description |
|-------|------------------|
| `sslmode` | The ssl mode to use when connecting. Set to `disable` to disable ssl verification for testing. |


### Connection string generation

When using this mode, the following connection string will be generated and used by SchemaHero:

```
postgres://<user>:<password>@<host>:<port>/<dbname>?sslmode=<sslmode>
```

If `sslmode` is not provided, the `sslmode` query parameter will not be appended.

## MySQL

In addition to the fields above, MySQL connections support the following parameters:

| Field | Description |
|-------|------------------|
| `disableTLS` | A boolean, set to true to disable TLS on connections. |


### Connection string generation

When using this mode, the following connection string will be generated and used by SchemaHero:

```
<user>:<password>@tcp(<host>:<port>)/<dbname>
```

When `disableTLS` is set to `true`, SchemaHero will append `?tls=false` to the generated connection string.

## Examples

An example of connecting to postgres database using parameters is:

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
      sslmode:
        value: disable
```

It's also possible to use secrets for some or all values:

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
        value: "5432"
      dbname:
        value: db-name
      sslmode:
        value: disable
```
