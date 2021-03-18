---
title: Custom Types
description: Managing Cassandra Custom Data Types
---

Custom (user-defined) data types are commonly used in Cassandra databases.

Custom types can be defined and SchemaHero will creaste/update these in the database.

## Example

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: DataType
metadata:
  name: basic-info
database: my-cassandra-database-object
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