---
title: Tables
description: Managing Cassandra Tables
---

SchemaHero can manage both the columns and properties of a Cassandra table.

## Cassandra Table Columns

Like other databases, a Cassandra table schema can be declaratively defined and the SchemaHero operator will reconcile it against the running cluster to apply the required migrations.

For example, given the following Table object:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metdata:
  name: users-table
database: my-cassandra-database-object
name: users
schema:
  cassandra:
    primaryKey:
      - [id]
    columns:
      - name: id
        type: int
      - name: login
        type: varchar
      - name: name
        type: varchar
```

### Primary Keys

Primary keys are immutable in a Cassandra table.
If a primary key changes, SchemaHero will return an error because it cannot update the table to match the desired state.

SchemaHero supports compound Primary Keys in Cassandra:

For the following `CREATE TABLE` definition:

```
CREATE TABLE cycling.cyclist_category ( 
  id UUID, 
  category text, 
  points int, 
  lastname text,     
PRIMARY KEY (id)
```

The equivalent SchemaHero manifest is:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metdata:
  name: cyclist-category
database: cycling
name: cyclist_category
schema:
  cassandra:
    primaryKey:
      - [id]
    columns:
      - name: id
        type: uuid
      - name: category
        type: text
      - name: points
        type: int
      - name: lastname
        type: text
```

If a compound primary key is desired:

```
CREATE TABLE cycling.cyclist_category ( 
  id UUID, 
  category text, 
  points int, 
  lastname text,     
PRIMARY KEY (id, (category, points))
```

It can be specified in the SchemaHero object definition:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metdata:
  name: cyclist-category
database: cycling
name: cyclist_category
schema:
  cassandra:
    primaryKey:
      - [id]
      - [category, points]
    columns:
      - name: id
        type: uuid
      - name: category
        type: text
      - name: points
        type: int
      - name: lastname
        type: text
```

