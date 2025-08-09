---
title: Connecting
description: Connecting Postgres to SchemaHero
---

SchemaHero accepts a standard Postgres `uri` field when connecting to a Postgres database. 
This connection string supports many options, and full documentation can be found here: https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING.

The syntax of a Postgres connection URI is:

```shell
postgresql://[user[:password]@][netloc][:port][,...][/dbname][?param1=value1&...]
```

(Note: SchemaHero also supports `postgres://`, in addition to the official `postgresql://`).

All supported parameters are documented on the [Postgres website](https://www.postgresql.org/docs/current/libpq-connect.html#AEN45575).

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-database
spec:
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
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-database
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          secretKeyRef:
            name: postgresql-secret
            key: uri
```

## PostgreSQL Features

PostgreSQL is SchemaHero's most fully supported database, including:

### Schema Management
- Tables, views, functions, and extensions
- All PostgreSQL column types and constraints
- Indexes, foreign keys, and primary keys
- User-defined types and domains

### Data Migrations
PostgreSQL supports all SchemaHero data migration operations:

- **Static Updates**: Update columns with static values
- **Calculated Updates**: Update columns using PostgreSQL expressions
- **Data Transformations**: 
  - Timezone conversions using `AT TIME ZONE`
  - Type casting with PostgreSQL cast operators
  - String transformations (UPPER, LOWER, REPLACE, SUBSTRING)
- **Custom SQL**: Execute arbitrary PostgreSQL statements with validation

Example data migration:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: DataMigration
metadata:
  name: user-data-cleanup
spec:
  database: my-database
  name: user-data-cleanup
  schema:
    postgres:
      - staticUpdate:
          table: users
          set:
            status: "active"
            updated_at: "CURRENT_TIMESTAMP"
          where: "status IS NULL"
      - calculatedUpdate:
          table: users
          calculations:
            - column: full_name
              expression: "CONCAT(first_name, ' ', last_name)"
```
