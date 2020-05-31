---
title: Transforms
description: Transforms
---

**Status**: *Proposed Enhancement*

Changing the data type of a column managed by SchemaHero is as simple as just editing the type in the YAML and redeploying it. Depending on the original and new column type, there are some occaisionally some considerations. The database engine will have to transform an existing data to apply the generated migration. Let's look at an example to illustrate:

Let's assume we already habe a table managed by SchemaHero, deployed with this YAML:

```yaml
apiVersion: schemas.schemahero.io/{{< schemaheroAPIVersion >}}
kind: Table
metadata:
  name: reservation
spec:
  database: schemahero-tutorial
  name: reservation
  schema:
    postgres:
      primaryKey: [id]
      columns:
        - name: id
          type: char(8)
        - name: created_at
          type: timestamp
```

The second column defined here is a timestamp, but it does not contain any constraints. There could be NULL values in here. To add a `notNull` constraint to the `created_at` column, we need to supply a `transform`:

```yaml
apiVersion: schemas.schemahero.io/{{< schemaheroAPIVersion >}}
kind: Table
metadata:
  name: reservation
spec:
  database: schemahero-tutorial
  name: reservation
  schema:
    postgres:
      primaryKey: [id]
      columns:
        - name: id
          type: char(8)
        - name: created_at
          type: timestamp
          constraints:
            notNull: true
          transforms:
            notNull:
              value: "NOW()"
```

The above examle is the most basic transform. We've added a `transform` to the column, and added a static value (`NOW()`) to the `notNull` transform. This is the transform that will execute when setting the column type to not null.

 // TODO need to document all transform types.
