---
title: Indexes
description: Managing indexes for a table
---

SchemaHero supports creating additional indexes on a table; indexes that are neither primary keys nor foreign keys. 
Additional indexes can be on a single column or created from multiple columns.

To add an index, first add any constraints required on the column (notNull, etc). 
Then at the top level of your schema definition, add the index under a key named `indexes`.

The definition of the `index` type is:

```yaml
indexes:
  - columns: []         # required, an array of columns to include in the index
    name: <string>      # optional, name of the index. if not supplied, SchemaHero will generate
    isUnique: <boolean> # optional, set to true to add a unique constraint
```

The example below shows a postgres table that has a primary key on the `id` column, but also adds a unique constraint on a not-nullable column `email`.

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metadata:
  name: users
spec:
  database: my-database
  name: users
  schema:
    postgres:
      primaryKey:
      - id
      indexes:
      - columns:
        - email
        name: idx_users_email
        isUnique: true
      columns:
      - name: id
        type: int
        constraints:
          notNull: true
      - name: email
        type: varchar (255)
        constraints:
          notNull: true
```
