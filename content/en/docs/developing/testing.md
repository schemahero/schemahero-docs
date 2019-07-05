---
date: 2019-05-25
linktitle: "Testing"
title: Testing
weight: 60220
---

Running `make test` will validate all unit tests. SchemaHero uses `kind` with a custom integration test framework to validate the operations. This runs on commit, but it's designed to be easy to run locally to. A full set of integration tests takes a few minutes to run because we create and destroy local Kubrenetes clusters along the way.
