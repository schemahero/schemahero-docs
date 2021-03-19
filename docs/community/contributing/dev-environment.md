---
title: Development Environment
description: A guide to setting up a dev environment for SchemaHero
---

SchemaHero is written in Go and all of the source code is in a single repository.

To get started, we recommend:

1. Install Go (1.14 or later)
1. Fork and clone the [SchemaHero repo](https://github.com/schemahero/schemahero)
1. Run `make` to generate all binaries and `make test` to execute the unite tests
1. Run `make -C integration run` to execute the intgegration tests

## Testing 

As you iterate on a change, there's a full set of integration tests that validate compatibility with all versions of all supported database engines.
Running the integration tests will ensure that no local change is breaking support for the various supported databases.
When adding a new feature, we encourage an integration test to be added also.
SchemaHero is a complex project, and we depend on the tests to keep everything working properly.