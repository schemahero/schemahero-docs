---
title: Introduction
description: Start here to understand the SchemaHero tutorial
---

This tutorial will walk you through deploying SchemaHero and a sample database.
We will design a very basic database for a fictitious airline reservation system and deploy it to Postgres.

This tutorial will deploy an empty database, create an initial schema and then modify the schema so that it ends up with the following tables:

```
...
```

This tutorial will create a namespace named `schemahero-tutorial` and all recommended YAML will be deployed to that namespace.
At the end of the tutorial, there are steps to clean up the cluster and remove the database and all components.

## Goals

By completing this tutorial, you will know know the basics of SchemaHero including:
1. Installing SchemaHero locally and in a Kubernetes cluster
1. Deploying and modifying database schemas
1. SchemaHero workflows including approving and rejecting migrations

## Prerequisites

Before starting this tutorial, you should have the following:
1. A Kubernetes cluster and local `kubectl` access to the cluster.
If you don't have one for testing, consider [KiND](https://github.com/kubernetes-sigs/kind), [K3S](https://k3s.io) or [kURL](https://kurl.sh).
1. Basic knowledge about database schemas. 
This toturial uses Postgres, so Postgres experience is recommended.

All of the YAML for this tutorial is in [https://github.com/schemahero/schemahero/tree/master/examples/airline](https://github.com/schemahero/schemahero/tree/master/examples/airline).