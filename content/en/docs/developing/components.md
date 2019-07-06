---
date: 2019-05-25
linktitle: "Components"
title: Components
weight: 80110
---

SchemaHero has several components, all created from the `schemahero/schemahero` repo. At build time, there are 2 different Docker iamges created, and this project as 2 different binaries that are created frmo it.

## manager

There's a binary created from `/cmd/manager/main.go` that runs the SchemaHero Manager. At build time, this is created and packaged and delivered as a docker image named `schemahero/schemahero-manager`.

The manasger contains the parts of the Operator that interact with the cluster. This binary runs the local Kubernetes reconcile loops and receives notifications when SchemaHero custom resources are created, updated or deleted. This is the main entry point for how SchemaHero runs.

## schemahero

The other binary is created from `/cmd/schemahero/main.go`. This is actually a standalone executable, and can run outside of Kuberentes. This contains the `schemahero` CLI, which current contains 2 command: `generate` and `watch`. The `generate` command is used in migations, and the `watch` command will open a connection to the specified database, and respond to external events (drift detection). The manager pod creates a watch deployment in the cluster for every Database object that's deployed. The watch deployment will run in the namespace specified in the custom resources, not in the schemahero-system namespace. This allows Kubernetes DNS to resolve the database hostname in a predictable way.

# Deploying a table sequence
