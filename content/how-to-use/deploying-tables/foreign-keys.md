---
date: 2019-05-25
linktitle: "Foreign keys"
title: Foreign keys
weight: 4060
---

# Foreign Keys

Support for creating, altering and dropping Foreign Keys is [in development](https://github.com/schemahero/schemahero/pull/43/files) and will be shipped in [v0.2.0](/roadmap/v0.2.0-v1alpha2/)

To define a foreign key on a table, use the `foreignKeys` field, as in this example:

```yaml
apiVersion: schemas.schemahero.io/v1alpha1
kind: Table
metadata:
  name: users
spec:
  database: testdb
  name: projects
  requires: []
  schema:
    postgres:
      primaryKey: [id]
      foreignKeys:
        - columns:
            - id
          references:
            table: users
            columns:
              - id
      columns:
        - name: id
          type: integer
        - name: user_id
          type: integer
```

A well-formed `foreignKeys` field is an array of `foreignKey` objects:

`columns`: An array of the column names that are part of this table that have the foreign key contraint applied. (the child columns)

`references.table`: The name of the parent table

`references.columns`: An array of the column names that exist in the parent table that are referenced.
