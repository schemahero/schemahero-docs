---
date: 2019-05-25
linktitle: "Connecting"
title: Connecting
weight: 2
---

SchemaHero accepts a standard Postgres `uri` field when connecting to a Postgres database. This connection string supports many options, and full documentation can be found here: https://github.com/go-sql-driver/mysql#dsn-data-source-name.

The syntax of a Postgres connection URI is:

```shell
postgresql://[user[:password]@][netloc][:port][,...][/dbname][?param1=value1&...]
```

(Note: SchemaHero also supports `postgres://`, in addition to the official `postgresql://`).

All supported parameters are documented on the [Postgres website](https://www.postgresql.org/docs/current/libpq-connect.html#AEN45575).

```yaml
apiVersion: databases.schemahero.io/v1alpha1
kind: Database
metadata:
  name: my-database
connection:
  postgres:
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
apiVersion: databases.schemahero.io/v1alpha1
kind: Database
metadata:
  name: my-database
connection:
  postgres:
    uri:
      valueFrom:
        secretKeyRef:
          name: postgresql-secret
          key: uri
```
