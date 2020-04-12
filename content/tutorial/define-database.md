---
date: 2019-05-25
linktitle: "Define a database"
title: Define a database
weight: 30
---

Once the operator is installed and we have a database to connect to, the next step is to tell SchemaHero about the database. This is accomplished by deploying custom resource to the cluster with the connection information.

 A database definition will allow SchemaHero to manage the schema of the database. A database definition includes a name type and connection parameters.

 If you are using the example Postgres database from the previous step, create the following YAML locally and `kubectl apply` it.

 ```yaml
apiVersion: databases.schemahero.io/{{< schemaheroAPIVersion >}}
kind: Database
metadata:
  name: schemahero-tutorial
spec:
  connection:
    postgres:
      uri:
        value: postgres://schemahero:password@postgresql:5432/github?sslmode=disable
 ```


Reviewing this YAML:

`apiVersion: databases.schemahero.io/{{< schemaheroAPIVersion >}}`: this just tells Kubernetes that the SchemaHero manager will be responsbile for the YAML

`kind: Database`: the SchemaHero Operator exposes several kinds. A `Database` instructs the Operator that this is a database connection.

`metadata.name: schemahero-tutorial`: this is the name of the resource. It can be anything you'd like, as long as the name you choose conforms to the Kubernetes naming rules.

`connection.postgres.uri.value: postgres://schemahero:password@postgresql:5432/github?sslmode=disable`: this is the action connection string. SchemaHero supports secrets and other ways to provide this information, but for now, let's keep it simple and just pass the connectio nstring in plain text.

---

Once that YAML is deployed, you can review it with:

```
kubectl get databases
...
```

And you can check the status of the connection to the database with:

```
kubectl describe database schemahero-tutorial
...

...
```

In the last command, you can see at the bottom that the SchemaHero manager has established a connection to postgres using the connection uri given. The fields `...` are updated. If the `lastConnectedAt` time is not recent, there might be trouble with the database or with the connection string.

