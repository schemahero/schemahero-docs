---
date: 2019-05-25
linktitle: "Kubernetes Secrets"
title: Kubernetes Secrets
weight: 3
---

Kubernetes Secrets are a good way to deliver sensitive data to the applications running in the cluster. SchemaHero supports reading parameters from secrets, using a syntax that's familiar to anyone who's written Kubernetes pods specs before.

To set up a connection to a postgres database using a connection URI stored in a secret:

```yaml
apiVersion: databases.schemahero.io/{{< schemaheroAPIVersion >}}
kind: Database
metadata:
  name: my-pg
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          secretKeyRef:
            name: postgres
            key: uri
```

The above custom resource assumes that a postgres secret with a uri key was already deployed, like this:

```yaml
apiversion: v1
kind: Secret
metadata:
  name: postgres
data:
  uri: cG9zdGdyZXM6Ly9zY2hlbWFoZXJvOnBhc3N3b3JkQHBvc3RncmVzOjU0MzIvZ2l0aHVi
```
