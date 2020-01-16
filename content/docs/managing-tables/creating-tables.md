---
date: 2019-05-25
linktitle: "Creating Tables"
title: Creating Tables
weight: 1
---

To create a new table, define the initial table schema in a YAML manifest with `kind: Table`, and deploy it to the cluster. SchemaHero will see this new table request, and connect to the database and run the appropriate `create table` commands to deploy the table schema.

For example, to create a simple table that stores session information in a database, we might want a postgres table that looks like this:

```sql
                         Table "public.session"
  Column   |            Type             | Collation | Nullable | Default
-----------+-----------------------------+-----------+----------+---------
 id        | text                        |           | not null |
 user_id   | text                        |           | not null |
 expire_at | timestamp without time zone |           | not null |
Indexes:
    "session_pkey" PRIMARY KEY, btree (id)
```

To get this table, the following YAML will create it:

```yaml
apiVersion: schemas.schemahero.io/v1alpha3
kind: Table
metadata:
  name: session
spec:
  database: my-database
  name: session
  schema:
    postgres:
      primaryKey:
      - id
      columns:
      - name: id
        type: text
        constraints:
          notNull: true
      - name: user_id
        type: text
        constraints:
          notNull: true
      - name: expire_at
        type: timestamp without time zone
        constraints:
          notNull: true
```

For more information about the available fields and attributes, contine reading the docs in this section.
