---
title: Introduction
description: An overview of the SchemaHero tutorial
---

This tutorial will walk you through deploying SchemaHero and a sample database.
We will design a very basic database for a fictitious airline reservation system and deploy it to PostgreSQL.

This tutorial will deploy an empty database, create an initial schema, and then modify the schema so that it ends up with the following tables:

<img src="/images/airline-entity.svg" style="padding-top: 20px; padding-bottom: 40px;"/>

This tutorial will create a namespace in your Kubernetes cluster named `schemahero-tutorial`, and all recommended YAML will be deployed to that namespace.
At the end of the tutorial, there are steps to clean up the cluster and remove the database and all components.

## Goals

By completing this tutorial, you will know the basics of SchemaHero including:
1. Installing SchemaHero locally and in a Kubernetes cluster
1. Deploying and modifying database schemas
1. SchemaHero workflows including approving and rejecting migrations

## Prerequisites

Before starting this tutorial, you should have the following:
1. A Kubernetes cluster and local `kubectl` access to the cluster.
If you don't have one for testing, consider [KiND](https://github.com/kubernetes-sigs/kind), [K3S](https://k3s.io), or [kURL](https://kurl.sh).
1. Basic knowledge about database schemas.
This tutorial uses [PostgresQL](https://www.postgresql.org/about/), so PostgresQL experience is recommended.

All of the YAML for this tutorial is in [https://github.com/schemahero/schemahero/tree/main/examples/tutorial](https://github.com/schemahero/schemahero/tree/main/examples/tutorial).
