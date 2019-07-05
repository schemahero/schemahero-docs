---
date: 2019-05-25
linktitle: "Installing SchemaHero"
title: Installing SchemaHero
weight: 20010
---

To install the SchemaHero operator:

```shell
kubectl apply -f https://git.io/schemahero
```

This will create a new namespace named `schemahero-system` and install the SchemaHero manager into this namespace.

By default, this will install the latest version.

To install a specific version, use the tag. For example:

```shell
# Install SchemaHero v0.1.0
export SCHEMAHERO_VERSION=v0.1.0
kubectl apply -f https://raw.githubusercontent.com/schemahero/schemahero/${SCHEMAHERO_VERSION}/install/schemahero/schemahero-operator.yaml
```

To verify the deployment, you can run:

```shell
kubectl get pods -n schemahero-system
```

There should be 2/2 pods running.
