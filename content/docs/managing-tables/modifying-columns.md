---
date: 2019-07-06
linktitle: "Modifying Columns"
title: "Modifying Columns"
weight: 4
---

Once a table is deployed, SchemaHero can modify columns in it. If you edit the YAML that contains the schema definition, and deploy it with `kubectl apply`, SchemaHero will compare that desired schema against the running schema, and generate the required SQL statements to convert the schema to the desired state.

SchemaHero does not currently have the abilility to change data, outside of the functionality that the database engine can do. For example, SchemaHero can drop a NOT NULL constraint, but can only sometimes add a NOT NULL constraint. Or, if you change a column type using SchemaHero, if the data in the database cannot be automatically coerced or converted to the new data type, the migration will fail.

There is planned work to introduce [transforms](/docs/managing-tables/transforms/) to help with the advanced migration use cases.
