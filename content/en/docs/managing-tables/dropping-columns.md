---
date: 2019-05-25
linktitle: "Dropping columns"
title: Dropping columns
weight: 40050
---

To remove (drop) a column from a database table, simply remove it from the YAML and deploy. SchemaHero will calculate the difference, detect that that column should be removed, and issue a database-specific command to remove the column.

Note: SchemaHero does not save backups of your database data. Dropping a column is a permanent action, unless you have snapshots of your database elsewhere.
