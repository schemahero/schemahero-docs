---
date: 2019-05-25
linktitle: "Overview"
title: Overview
weight: 1
aliases: ["/overview/about"]
---

SchemaHero is a Kubernetes Operator that implements a new custom kind: `Table`. The `Table` kind defines a database table, along with columns, type, indices and constraints. The `Table` object can be deployed to a cluster that has the SchemaHero operator installed. When the SchemaHero operator receives a `Table` object, it will query the target database for the current schema, if any.

img

Once SchemaHero has the current schema, it can determine how to apply the `Table` YAML by creating a `Migration`. For example, if the table does not already exist in the database, SchemaHero will translate the `Table` YAML into a `CREATE TABLE` statement and create a pending `Migration`. Alternatively, if the table already exists, SchemaHero will diff the columns, types, indices and constraints of the current table with the desired table and create an `ALTER TABLE` statement. SchemaHero will then deploy a pending `Migration` with the `ALTER TABLE` statement agsinst the target database.

img


SchemaHero is a Kubernetes Operator that manages database schema migrations as code. You can create a table and then modify the table, columns, indexes and other properties by editing the table definition. SchemaHero handles the process of comparing the desired schema to the running schema and then building and executing SQL statements to migrate.

## Features

- Connect to any supported database
  - MySQL 5.6 or later
  - Postgres 9 or later
- Connect to databases in the cluster or running outside of the cluster (RDS, Cloud SQL, Compose.io, etc).
- Schema changes can be reviewed before deploying
- Manual approval and rejection workflows for database changes
- Full support for built-in column types
- Manages primary keys (including composite keys)
- Create and manage foreign keys between tables
- Create additional indexes on columns

