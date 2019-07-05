---
date: 2019-05-25
linktitle: "Primary keys"
title: Primary keys
weight: 40050
---

SchemaHero can manage simple or composite primary keys. The syntax for this can vary a little by database, but:

```yaml
apiVersion: schemas.schemahero.io/v1alpha1
kind: Table
metadata:
  name: flights
spec:
  database: my-databas
  name: flights
  schema:
    postgres:
      primaryKey: [origin, destination]
      columns:
        - name: origin
          type: char(4)
        - name: destination
          type: char(4)
        - name: duration
          type: integer
```

In the above example, we are creating a table named "flights". This table has a composite primary key that includes the origin and the destination columns.
