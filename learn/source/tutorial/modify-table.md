---
title: Modify Table
description: Modify Table
---

Now we have a postgres database running in the cluster, and SchemaHero has created the `reservation` table. Let's change the table.

Open the `reservation.yaml` file, and make a couple of changes. Specifically, we want to change the `last_name` column from `varchar(40)` to `varchar(60)`. So edit that file, make the change and run `kubectl apply` on it. Within a few seconds, you should see the new column type reflected in the database.

