---
title: Install Operator
description: Install Operator
---

SchemaHero is designed to run in a Kubernetes cluster. To install the Operator component to your cluster, run:

```shell
kubectl schemahero install
```

This will create a `schemahero-system` namespace, and deploy the SchemaHero manager. You can confirm that SchemaHero is installed by executing:

```
kubectl get databases
No resources found
```
