---
title: Connecting
description: Connecting SchemaHero to a Cassandra cluster
---

SchemaHero requires at least one host, but supports several fields when defining a Cassandra connection.

The following parameters are supported when connecting to Cassandra:

| Name | Description |
|------|-------------|
| `hosts` | A string array containing one or more hosts to connect to. If the port is non-standard, include it in the host. |
| `keyspace` | The keyspace to connect to. To support multiple keyspaces, include multiple database custom resources. |
| `username` (optional) | The username to use when authenticating |
| `password` (optional) | The password to use when authenticating | 

**Note: `keyspace`, `username` and `password` can be supplied on in the custom resource or reference a secret.**

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-database
spec:
  connection:
    cassandra:
      hosts: ["10.1.1.1", "10.1.1.2"]
      keyspace: "my-keyspace"
```


Alternatively, it's possible to read the URI from a Kubernetes Secret:


```yaml
apiVersion: v1
kind: Secret
metadata:
  name: cassandra-secret
data:
  username: dXNlcm5hbWU=
  password: cGFzc3dvcmQ=
---
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-database
spec:
  connection:
    cassandra:
      hosts: ["10.1.1.1", "10.1.1.2"]
      keyspace: "my-keyspace"
      username:
        valueFrom:
          secretKeyRef:
            name: cassandra-secret
            key: username
      password:
        valueFrom:
          secretKeyRef:
            name: cassandra-secret
            key: password            
```
