---
title: Editing Constraints
description: Editing contraints on a column
---

SchemaHero supports creating and editing constraints on database table columns.

## nullability

When changing a column from optional to required (adding a "not null" constraint), 
SchemaHero supports adding a default to the column and will update all existing rows with this new default. 
For a large table, this change may impact performance when the migration is applied.

For example, assume a simple table is created with the following definition:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
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
        - name: frequency
          type: varchar(255)
```

Later, assume that the `frequency` column has null values and there's a requirement to make this column not nullable. 
Editing this table definition to be:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
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
        - name: frequency
          type: varchar(255)
          default: "imported"
          constraints:
            notNull: true
```

Will create a migration that has 3 phases:

**1. Add Default**

This step is completed first. 
This will ensure that any new data inserted will have the default value applied while the rest of the migration continues.

**2. Update Values**

Next, SchemaHero will run a command similar to `update flights set frequency = 'imported' where frequency is null` (this will be created in a format appropriate for and compatible with the ddl syntax the engine requires).

**3. Apply Constraint**

Finally, SchemaHero will apply the not null constraint to the table, preventing nullable values from being written.
