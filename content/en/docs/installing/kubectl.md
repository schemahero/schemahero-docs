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
# Install SchemaHero v0.2.0
export SCHEMAHERO_VERSION=v0.2.0
kubectl apply -f https://raw.githubusercontent.com/schemahero/schemahero/${SCHEMAHERO_VERSION}/install/schemahero/schemahero-operator.yaml
```

To verify the deployment, you can run:

```shell
kubectl get pods -n schemahero-system
```

There should be 1 pod running in this namespace:

```shell
$ kubectl get pods -n schemahero-system
NAME                              READY   STATUS    RESTARTS   AGE
schemahero-controller-manager-0   2/2     Running   0        3d2h
```
