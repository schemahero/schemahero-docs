---
title: plan
description: kubectl schemahero plan
---

Calculate a plan to generate a migration statement (DDL) when given a table manifest (YAML) and a running database.

### Usage
kubectl schemahero generate

Flag | Type |	Description
-----|------|------------
`--driver` | string | The database driver to connect with. Must be `postgres`, `mysql`, or `cockroachdb`
`--out` | string | The filename to write DDL statements to. If not present output will be written to stdout.
`--uri` | string | The database URI to connect to. Must be accessible from the workstation running the command
`--overwrite` | bool | When set, will overwrite the file in `out`. This defaults to `true`
`-spec-file` | string | The filenamme or directory name containing the manifest(s) to apply
`-h`, `--help`	| |	help for install

In addition to the flags documented above, this command accepts all [shared flags](../kubectl/shared-flags).
