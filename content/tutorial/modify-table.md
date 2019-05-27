---
date: 2019-05-25
linktitle: "SchemaHero Tutorial: Modify schema"
title: Modify schema
weight: 50
---

## Changing the Schema

Now we have a postgres database running in the cluster, and SchemaHero has created the `reservation` table. Let's change the table.

Open the `reservation.yaml` file, and make a couple of changes. Specifically, we want to change the `last_name` column from `varchar(40)` to `varchar(60)`. So edit that file, make the change and run `kubectl apply` on it. Within a few seconds, you should see the new column type reflected in the database.

