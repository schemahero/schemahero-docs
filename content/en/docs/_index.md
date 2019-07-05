
---
title: "SchemaHero Documentation"
linkTitle: "Documentation"
weight: 20
menu:
  main:
    weight: 30
---

SchemaHero is a Kubernetes Operator that manages database schema migrations as code. You can create a table and then modify the table, columns, indexes and other properties by editing the table definition. SchemaHero handles the process of comparing the desired schema to the running schema and then building and executing SQL statements to migrate.

## Features

- Connect to any supported database
  - MySQL 5.6 or later
  - Postgres 9 or later
- Connect to databases in the cluster or running outside of the cluster (RDS, Cloud SQL, Compose.io, etc).
- Full support for built-in column types
- Manages primary keys (including composite keys)
- Create and manage foreign keys between tables
- Create additional indexes on columns

## Quick SchemaHero Workflow

