---
date: 2019-05-25
linktitle: "Primary Keys"
title: Primary Keys
weight: 5
---

SchemaHero can manage simple or composite primary keys. To create a primary key:

```yaml
apiVersion: schemas.schemahero.io/v1alpha3
kind: Table
metadata:
  name: flights
spec:
  database: my-database
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
