---
date: 2019-07-05
linktitle: "install"
title: install
weight: 1
---

Install the SchemaHero operator to an existing cluster or generate the YAML that can be used to install the SchemaHero cluster.

### Usage
kubectl schemahero install [flags]

Flag | Type |	Description
-----|------|------------
`--yaml` | | when provided, don't install just generate the YAML
`--extensions-api` | string | version of apiextensions.k8s.io to generate. if unset, will detect best version from kubernetes version
`-h`, `--help`	| |	help for install
