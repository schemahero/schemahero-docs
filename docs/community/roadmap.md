---
title: Roadmap
description: The SchemaHero Roadmap
---

SchemaHero is an early project and there's a lot to do.
Our roadmap is designed to add compatibility with existing infrastructure and systems in order to create additional use cases and get feedback and adoption of SchemaHero in various environments.

The detailed SchemaHero roadmap is maintained in the [Roadmap project](https://github.com/schemahero/schemahero/projects/2) in the SchemaHero GitHub repo.

[View the Roadmap](https://github.com/schemahero/schemahero/projects/2){ .md-button .md-button--primary }

## Short Term Roadmap

The short term roadmap (6-12 months) is focused on increasing compatibility between SchemaHero and various production environments.
The goals of this period of time is to see SchemaHero adopted in more environments and identifying issues that prevent use of SchemaHero to manage a database schema.

* Additional database engine support
* Additional secrets and credentials management support
* Workflow enablement (change managment processes)
* Support for non-Kubernetes deployments (Heroku, CI/CD deploying to RDS, etc)

## Long Term Roadmap

After we've validated that SchemaHero is useful and will be adopted by software developers to manage database schemas, we will move on to the long term roadmap.
The long term roadmap are items that we'd love to see, just ideas right now.
These are expanding the footprint and core capabilities of the SchemaHero API.

Some ideas include:

* Migrating between database engines (Postgresql -> CockroachDB, for example)
* Automatically optimizing table schema based on load (indexes, keys, etc)
* Managing database backups for disaster recovery
