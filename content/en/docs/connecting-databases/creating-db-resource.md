---
date: 2019-05-25
linktitle: "Database Resources"
title: Database Resources
weight: 30010
---

Before deploying database tables and schemas, a database object should be deployed. The CRD for databases is responsible for creating an object that can be referenced in tables and schemas.

This makes it easier to deploy schemas so that the credentials and database connection string doesn't have to be included in every schema migration that's deployed.

When a database object is deployed, the operator will attempt to connect to it using the credentials provided.
