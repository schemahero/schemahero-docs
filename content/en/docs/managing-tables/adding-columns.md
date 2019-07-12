---
date: 2019-05-25
linktitle: "Adding columns"
title: Adding columns
weight: 40030
---

Once table table has been deployed, SchemaHero can add new columns easily. To add a new column to an existing table, add the column definition to the YAML manifest, and deploy it using `kubectl apply`. The SchemaHero operator will reconcile this table manifest with the actual database.

SchemaHero is notified that there's a new version of the table to deploy. SchemaHero connects to the database and queries the current schema, including columns, constraints, indexes, primary and foreign keys. SchemaHero compares the current schema with the desired schema in the new manifest, and generates the required SQL statement(s) to migrate the table schema to the new defintion.

When a new column is added, SchemaHero will run the appropriate `alter table` commands against the database to add the new column.
