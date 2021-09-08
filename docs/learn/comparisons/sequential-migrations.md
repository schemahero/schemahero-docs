---
title: Sequential Migrations
description: Comparing SchemaHero's declarative model to sequence migrations
---

Sequential Migration and Replay schema management tools work by allowing the developer to create a series of migration files that will be executed in order at migration time.
After a system is running, a new migration file can be added to the stack to be deployed.
This is an imperative pattern; a developer writes intructions that will be executed, with the intent of producing a desired schema.

**Examples**  

- [db-migrate](https://github.com/db-migrate/node-db-migrate)
- [Flyaway](https://flywaydb.org/)
- [goose](https://github.com/pressly/goose) 

**Challenges**

These tools work nicely at first, but will eventually create some operational challenges:

1. When a feature of the database engine is no longer used by the application, all newly installed database instances must have support for this unused feature in order to allow this migration to succeed. 
For example, if using Postgres and an extension is required and used for a while and then removed, the database migations will fail to run on a new database unless that extension is present, even though it's not needed in the end state. 
This can be solved by manually refactoring old migrations to remove the dependency on the unused feature.

2. Creating new environments becomes slow and brittle over time. 
In a product that's rapidly iterating, there can be hundreds of migrations. 
Replaying these can be slow, and any single failed migration will break the deployment.

3. Database upgrades create incompatible migrations. 
After upgrading a database version, the syntax supported may change. 
This can leave older migrations unable to be applied against the current version of the databse when creating a new environment.

4. Concurrent changes can create conflicts or skipped migrations. 
These tools often employ a sequential (integer) counter or a timestamp. When multiple migrations are simultaneously prepared offline, these may have the same counter value, or be commited in a different order than they were generated. 
This can cause the runtime to skip a migration.

#### Workarounds

To help solve this, manual intervention is often taken to "rebase" and refactor the migration history. 
This is equivalent to retrieving a current schema from the database, deleting all migrations, and creating a single migration. 
This is a manual process that must be run periodically when using a sequential migration strategy.
