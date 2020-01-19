---
date: 2019-07-05
linktitle: "get migrations"
title: get-migrations
weight: 3
---

List the generated migrations.

### Usage
kubectl schemahero get migrations [flags]

Flag | Type |	Description
-----|------|------------
`-d`, `--database` | | when provided, filter the output of tables to only the tables that below to the specified database
`--all-namespaces` | | when provided, list migrations from all namespaces, not the specified namespace
`-h`, `--help`	| |	help for install

