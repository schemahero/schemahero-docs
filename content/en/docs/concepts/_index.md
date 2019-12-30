---
date: 2019-05-25
linktitle: "Concepts"
title: Concepts
weight: 10000
---

SchemaHero is a Kubernetes Operator that implements a new custom kind: `Table`. The `Table` kind defines a database table, along with columns, type, indices and constraints. The `Table` object can be deployed to a cluster that has the SchemaHero operator installed. When the SchemaHero operator receives a `Table` object, it will query the target database for the current schema, if any.

img

Once SchemaHero has the current schema, it can determine how to apply the `Table` YAML that was deployed. If the table does not already exist in the database, SchemaHero will translate the `Table` YAML into a `CREATE TABLE` statement and deploy it. If the table already exists, SchemaHero will diff the columns, types, indices and constraints of the current table with the desired table and create an `ALTER TABLE` statement. SchemaHero will then execute the `ALTER TABLE` statement against the target database.

img
