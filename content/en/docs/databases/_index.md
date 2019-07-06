---
date: 2019-05-25
linktitle: "Databases"
title: Databases
weight: 50000
---

SchemaHero currently supports Postgres and Mysql. SchemaHero does not attempt, nor is it a goal of the project to produce a cross-database syntax to define schemas. There are many similarities between different database engines, but each also have specific column types and other non-standard extensions that they support. SchemaHero can support this natively by not targeting the "lowest common denominator" schema definition and instead, allowing each database engine to define it's own YAML document.

This decision allows for full support of the database schema, but does not solve for moving from Mysql to Postgres, for example. There are other tools available to help convert a schema. To use SchemaHero, you still need to understand the underlying database engine and features that you need. SchemaHero is an improvement on existing schema migration tools such as Goose, FlyAway and golang-migrate.
