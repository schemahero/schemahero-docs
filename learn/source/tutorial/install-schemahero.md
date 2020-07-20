---
title: Install SchemaHero
description: Learn how to install the SchemaHero kubectl plugin and the in-cluster Operator
---

## Installing the `kubectl` plugin

The SchemaHero client component is packaged as a `kubectl` plugin and distributed through the [krew](https://krew.dev) package manager.
If you don't already have krew installed, head over to the [krew installation guide](https://krew.sigs.k8s.io/docs/user-guide/setup/install/), follow the steps there and then come back here.

Install the SchemaHero client component using:

```shell
kubectl krew install schemahero
```

Note: This will not install anything to your cluster, it only places a single binary named `kubectl-schemahero` on your path.

Verify the installation by checking the version:

```shell
kubectl schemahero version
```

You should see the version of SchemaHero installed on your workstation (0.10.0 or similar).

## Installing the in-cluster components

Once you have the `kubectl` plugin installed, we can install the SchemaHero in-cluster operator.

```shell
kubectl schemahero install
```

This will create a `schemahero-system` namespace, and deploy the SchemaHero operator.
You can confirm that SchemaHero is installed by executing:

```
kubectl get pods -n schemahero-system
```

If everything is working properly, you should see 1 pod running, and the output will look similar to below:

```shell
NAME           READY   STATUS    RESTARTS   AGE
schemahero-0   1/1     Running   0          38s
```

## Next Steps

Now that we have the client and cluster components running, we can [proceed to connecting a database](https://schemahero.io/learn/tutorial/connect-database).
