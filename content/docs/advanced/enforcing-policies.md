---
date: 2019-05-25
linktitle: "Enforcing Policies"
title: Enforcing Policies
weight: 3
---

Once you are managing your database schemas using SchemaHero, it's possible to leverage the rest of the Kubernetes ecosystem tooling. If you are looking for a way to enforce policies on your schema, we recommend checking out Open Policy Agent's Gatekeeper project. Schemas defined in SchemaHero are compatible with Open Policy Agent and you can write policies that can be enforced at build time and/or at run time.
