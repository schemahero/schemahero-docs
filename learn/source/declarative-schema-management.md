---
title: Declarative Schema Management
description: An explanation of the declarative schema management concept
---

Many database schema management tools create an imperative interface, requiring the developer to understand both the current state of the schema and the optimal commands to migrate the current schema (and related data) to a new, desired schema.
This model is difficult for several reaasons that are covered in this document.
This document proposes a declarative interface to replace this traditionally imperative one, and explains the benefits and challenges with this change.
 
There are many benefits to managing database schemas in a declarive format, including:

1. Ability to adhere to a change management process
2. Repeatable deployments to new environments
3. Compatibility with unexpected and new runtimes

### Define the current state only

In a declarative model, only the current state of the schema is defined. 
The declarative schema management application is responsible for producing the commands necessary to migrate the schema from any previous state to the desired state,
A benefit of only storing the current state is that previously used datbase extensions, tables and features will not be required when creating a new environment or instance.

### No need to learn DDL (Data Definition Language)

Traditional database engines receive schema changes through a subset of SQL statements known as DDL (Data Definition Language).
Developers should not need to learn the nuances of the DDL for every database engine they are targeting.
Converting from a unified, declarative model to the appropriate DDL commands based on the capabilities and state of the database can be handled programatically.

### Policies and best practices

When a declarative pattern to define database schema management is adopted, it becomes possible to validate schemas against a set of policies before application.
This is not easily possible with imperative tools that only store migration scripts.
With the full desired state available, the database schema can be evaluated against a set of rules to ensure that policies and ebst practices are enforced.