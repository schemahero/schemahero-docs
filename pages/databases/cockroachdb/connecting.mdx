---
title: Connecting
description: Connecting SchemaHero to a CockroachDB cluster
---

SchemaHero accepts a standard PostgreSQL `uri` field when connecting to a CockroachDB database. 
This connection string supports many options, and full documentation can be found [here](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING).

The syntax of a PostgreSQL connection URI is:

```shell
postgresql://[user[:password]@][netloc][:port][,...][/dbname][?param1=value1&...]
```

(Note: SchemaHero also supports `postgres://`, in addition to the official `postgresql://`).

All supported parameters are documented on the [PostgreSQL website](https://www.postgresql.org/docs/current/libpq-connect.html#AEN45575).

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-database
spec:
  connection:
    cockroachdb:
      uri:
        value: postgresql://username:password@postgres:5432/my-database
```


Alternatively, it's possible to read the URI from a Kubernetes Secret:


```yaml
apiVersion: v1
kind: Secret
metadata:
  name: postgresql-secret
data:
  uri: cG9zdGdyZXNxbDovL3VzZXJuYW1lOnBhc3N3b3JkQHBvc3RncmVzOjU0MzIvbXktZGF0YWJhc2U=
---
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-database
spec:
  connection:
    cockroachdb:
      uri:
        valueFrom:
          secretKeyRef:
            name: postgresql-secret
            key: uri
```
