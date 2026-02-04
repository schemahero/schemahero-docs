---
title: Creating Types
description: Creating new types in a database or keyspace
---

Starting in SchemaHero 0.12.0, it's possible to define and manage custom types for a some databases using declarative YAML.

| Database | SchemaHero support for custom types? |
|----------|--------------------------------------|
| PostgreSQL | no |
| MySQL | no |
| CockroachDB | no |
| Cassandra | **yes** |


To create a new type, define the initial type schema in a YAML manifest with `kind: DataType`, and deploy it to the cluster. 
SchemaHero will see this new type request, and connect to the database and run the appropriate `create type` commands to deploy the type schema.


For example, to create a user-defined type in a Cassandra database named `basic_info` to contain personal data about an individual cyclist:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
type: DataType
metadata:
  name: basic-info
spec:
  database: schemahero
  name: basic_info
  schema:
    cassandra:
        fields:
          - name: birthday
            type: timestamp
          - name: nationality
            type: text
          - name: weight
            type: text
          - name: height
            type: text

```

The YAML above will produce and execute the following statement on an empty database:

```sql
CREATE TYPE cycling.basic_info (
  birthday timestamp,
  nationality text,
  weight text,
  height text
);

```
