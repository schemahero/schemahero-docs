---
title: Installing SchemaHero
description: Installing SchemaHero
---

SchemaHero has 2 different components: an in-cluster Kubernetes Operator and a client side kubectl plugin that you can use to interact with the operator.
The best way to get started is to install the kubectl plugin:

## Client

The SchemaHero client component is packaged as a `kubectl` plugin, and distributed through the [krew](https://krew.dev) package manager.
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

You should see the version of SchemaHero installed on your workstation (0.12.1 or similar).

## Operator

SchemaHero relies on an in-cluster operator.
The next step in the installation is the operator components:

### One Command Deploy

It's easy to install the operator using the built-in command:

```shell
kubectl schemahero install
```

The above command will create a `schemahero-system` namespace, and install 3 new Custom Resource Definitions to your cluster.

### GitOps and Other Workflows

An alternative approach is to let the kubectl plugin generate the YAML that can be checked in, commited, and deployed using another tool:

```shell
kubectl schemahero install --yaml
```

This will create the necessary YAML to install the in-cluster SchemaHero operator.
After inspection, you can use `kubectl` to `apply` this YAML to your cluster.

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

## Verifying the image authenticity

We sign the official container images that are published on each release.
These are signed using [cosign](https://github.com/sigstore/cosign).
To verify the container image, you [download our public key](https://raw.githubusercontent.com/schemahero/schemahero/main/schemahero.pub) into a file named `schemahero.pub` and then:

```shell
cosign verify -key schemahero.pub schemahero/schemahero:0.12.3
```

If the container image was properly signed, you will see output similar to:

```shell
Verification for schemahero/schemahero:0.12.3 --
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - The signatures were verified against the specified public key
  - Any certificates were verified against the Fulcio roots.
{"critical":{"identity":{"docker-reference":"index.docker.io/schemahero/schemahero"},"image":{"docker-manifest-digest":"sha256:d8f2a52b42d80917f4de89f254c5bdfd55edc5a866fe97e2703259405315bc8b"},"type":"cosign container image signature"},"optional":null}
```

## Download the Software Bill of Materials

We also publish a SBOM (Software Bill of Materials) in SPDX format for each release.
To download the SBOM for a specific version, use the [cosign](https://github.com/sigstore/cosign) tool and run:

```shell
cosign download sbom schemahero/schemahero:0.12.3
```

It's sometimes useful to save the SBOM to a file:

```shell
cosign download sbom schemahero/schemahero:0.12.3 > sbom.txt
Found SBOM of media type: text/spdx
```
