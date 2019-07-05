---
date: 2019-05-25
linktitle: "Comparing SchemaHero to an ORM"
title: Comparing SchemaHero to an ORM
weight: 10030
---

An ORM (Object Relational Mapper) is a technique that enables developers to query databases without writing SQL statements. An ORM will generate the SQL queries for objects automatically, allowing a developer to simply run code, and not SQL. There are many reasons to use an ORM, including the fact that they provide an abstraction around athe database. This abstraction makes it easier for developers who don't have an understanding of the database engine and indices to perform complex queries without writing `INNER JOIN`s and carefully building their query to not have a significant impact on the database runtime.

SchemaHero does not do this. SchemaHero is a schema migration tool. SchemaHero creates and edits the structure of the database (tables, columns, indices and constraints). Developers won't interact with SchemaHero when querying data. In fact, SchemaHero doesn't have functionality to build queries that are used at runtime. Instead, this is a deploy-time tool.

Many ORMs also have the ability to manage the schema automatically. If you are using an ORM that can manage the schema, and you are already managing the schema with the ORM, there's rarely a reason to use a separate tools like SchemaHero. This tool is designed as a better way to manage and track schema changes, regardless of your use of an ORM to query the database at runtime.
