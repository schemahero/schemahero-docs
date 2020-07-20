---
title: Installing SchemaHero
description: Installing SchemaHero
---

SchemaHero has 2 different components: an in-cluster Kubernetes Operator and a client side kubectl plugin that you can use to interact with the operator.
The best way to get started, is to install the kubectl plugin:

## Client

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

## Operator

SchemaHero relies on an in-cluster operator.
The next step in the installation is to operator components:

### One Command Deploy

It's easy to install the operator using the built-in command:

```shell
kubectl schemahero install
```

The above command will create a `schemahero-system` namespace, and install 3 new Custom Resource Definitions to your cluster.

### GitOps and Other Workflows

An alternative approach is to let the kubectl plugin generate the YAML that can be checked in, commited and deployed using another tool:

```shell
kubectl schemahero install --yaml
```

This will create the necessary YAML to install the in-cluster SchemaHero operator.
After inspection, you can use `kubectl` to `apply` this YAML to you cluster.

## Verification

To verify the deployment, you can run:

```shell
kubectl get pods -n schemahero-system
```

There should be 1 pod running in this namespace:

```shell
$ kubectl get pods -n schemahero-system
NAME           READY   STATUS    RESTARTS   AGE
schemahero-0   1/1     Running   0          66s
```
