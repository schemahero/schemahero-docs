---
date: 2019-05-25
linktitle: "Generating from a db"
title: Generating from a db
weight: 3000
---

# Generating Resources From a Database

If you have an existing database and want to try SchemaHero, it's possible to use SchemaHero to export your current database schema as SchemaHero resources.

To start, get the `schemahero` binary (or use the Docker container) and provide a connection string to your database:

```shell
$ schemahero generate \
    --driver postgres \
    --uri postgres://user:pass@host:5432/dbname \
    --dbname destired-schemahero-databasename \
    --output-dir ./imported
```

or

```shell
$ docker run -v `pwd`/imported:/out \
    schemahero/schemahero:alpha \
    generate \
    --driver postgres \
    --uri postgres://user:password@host:5432/db?sslmode=disable \
    --dbname desired-schemahero-name \
    --output-dir /out
```

This will create .yaml files (1 per table) that you can deploy to a cluster to recreate the schema

