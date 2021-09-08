---
title: install
description: kubectl schemahero install
---

Install the SchemaHero operator to an existing cluster or generate the YAML that can be used to install the SchemaHero cluster.

### Usage
kubectl schemahero install [flags]

Flag | Type |	Description
-----|------|------------
`--yaml` | | when provided, don't install just generate the YAML
`--extensions-api` | string | version of apiextensions.k8s.io to generate. if unset, will detect best version from kubernetes version
`-h`, `--help`	| |	help for install
