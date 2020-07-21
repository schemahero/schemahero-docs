---
title: "Migrating To SchemaHero"
descriptino: Migrating To SchemaHero
---

If you have an existing database and want to try SchemaHero, it's possible to use SchemaHero to export your current database schema as SchemaHero resources.

To start, get the `schemahero` kubectl plugin and provide a connection string to your database:

```shell
$ kubectl schemahero generate \
    --driver postgres \
    --uri postgres://user:pass@host:5432/dbname \
    --dbname desired-schemahero-databasename \
    --output-dir ./imported
```

This will create `.yaml` files (1 per table) that you can deploy to a cluster to recreate the schema.

