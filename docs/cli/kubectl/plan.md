---
title: plan
description: kubectl schemahero plan
---

Calculate a plan to generate migration statements (DDL) when given a manifest (YAML) and a running database.

### Usage
kubectl schemahero plan

Flag | Type |	Description
-----|------|------------
`--driver` | string | The database driver to connect with. Must be `postgres`, `mysql`, or `cockroachdb`
`--out` | string | The filename to write DDL statements to. If not present output will be written to stdout.
`--uri` | string | The database URI to connect to. Must be accessible from the workstation running the command
`--overwrite` | bool | When set, will overwrite the file in `out`. This defaults to `true`
`--spec-file` | string | The filename or directory name containing the manifest(s) to apply
`--spec-type` | string | The type of spec to plan. Options: `table` (default), `view`, `function`, `extension`, `datamigration`
`-h`, `--help`	| |	help for plan

### Examples

#### Planning Schema Changes
```bash
# Plan table schema changes
kubectl schemahero plan \
  --driver=postgres \
  --uri="postgres://user:pass@localhost:5432/db" \
  --spec-file=table.yaml \
  --spec-type=table

# Plan view changes  
kubectl schemahero plan \
  --driver=postgres \
  --uri="postgres://user:pass@localhost:5432/db" \
  --spec-file=view.yaml \
  --spec-type=view
```

#### Planning Data Migrations
```bash
# Plan data migration
kubectl schemahero plan \
  --driver=postgres \
  --uri="postgres://user:pass@localhost:5432/db" \
  --spec-file=data-migration.yaml \
  --spec-type=datamigration \
  --out=migration.sql
```

In addition to the flags documented above, this command accepts all [shared flags](../kubectl/shared-flags).
