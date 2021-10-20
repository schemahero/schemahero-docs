---
title: Development Environment
description: A guide to setting up a dev environment for SchemaHero
---

SchemaHero is written in Go and all of the source code is in a single repository.

To get started, we recommend:

1. Install Go (1.16 or later)
1. Fork and clone the [SchemaHero repo](https://github.com/schemahero/schemahero)
1. Run `make` to generate all binaries and `make test` to execute the unite tests
1. Run `make -C integration run` to execute the integration tests

## Testing 

As you iterate on a change, there's a full set of integration tests that validate compatibility with all versions of all supported database engines.
Running the integration tests will ensure that no local change is breaking support for the various supported databases.
When adding a new feature, we encourage an integration test to be added also.
SchemaHero is a complex project, and we depend on the tests to keep everything working properly.

## Deployment

If you would like to E2E test your operator/cli changes, you can use this procedure to get it deployed:

1. Start with a Kubernetes cluster context configured. If you need a cluster, try using [K3D](https://k3d.io/) or [KinD](https://kind.sigs.k8s.io/) with docker/[podman](https://podman.io/).
    1. You'll need ports exposed outside the cluster for the controller manager to connect to the database engine. You can either make sure NodePorts will be bound to the correct host machine now, or you can use `kubectl port-forward ...` later.
1. Make sure you have `controller-gen` tools installed >=0.6.0.
You can run `make controller-gen` to install, or `controller-gen --version` to check your current version.
NOTE: if you already have a version installed, you may need to manually upgrade: `go install sigs.k8s.io/controller-tools/cmd/controller-gen@v0.6.0`
1. Deploy the Schemahero CRDs: `kubectl apply -f config/crds/v1`
1. Build the kubectl plugin: `make bin/kubectl-schemahero`
You can run this outside of kubectl by directly calling the binary `./bin/kubectl-schemahero`.
1. Build and run the controller manager: `make run`.
1. If necessary, deploy a test database engine using one of the convenience manifests located in `config/dev/database/`
    1. If you plan on using a NodePort Service to connect your local controller manager to the DB, now would be the time to configure it.
    1. If you plan on using `kubectl port-forward ...` instead, run the appropriate command in a new terminal window.
1. Create a database CR that uses the *externally available connection url* for your database in the cluster.
1. Profit!
