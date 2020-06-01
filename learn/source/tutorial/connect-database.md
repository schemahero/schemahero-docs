---
title: Connect A Database
description: Learn how to configure SchemaHero to manage a database
---

In this step, we will deploy a Postgres instance and configure SchemaHero to manage this instance.

To start, we need a Postgres server to use during this tutorial.
In order to make this part easy, we've exported the Postgres 11.8.0 Helm chart to plain Kubernetes YAML and added it to the SchemaHero repo.

## Deploy Postgres

Deploy Postgres into a new `schemahero-tutorial` namespace with the following command:

```shell
kubectl create ns schemahero-tutorial
kubectl apply -n schemahero-tutorial -f https://raw.githubusercontent.com/schemahero/schemahero/master/examples/airline/postgres/postgres-11.8.0.yaml
```

## Validate Postgres is running

After deploying this, you can connect to your Postgres instance from the CLI using:

```shell
kubectl exec -it -n schemahero-tutorial \
  postgresql-0 psql -- -U airline-user -d airline-demo
```

(When prompted, the password for "airline-user" is "password").

### Using a GUI SQL management tool

For this demo, we'll show commands in SQL, but it's possible to use a GUI based tool to connect to and visualize the database.
We like [Beekeeper Studio](https://www.beekeeperstudio.io/), if you'd prefer a GUI-based tool to manage Postgres.

Before you can connect using Beekeeper or another management UI, you'll have to create a port-foward using `kubectl` because the Postgres instance we just deployed is not accessible outside of the cluster.

```shell
kubectl port-forward -n schemahero-tutorial svc/postgresql 5432:5432
```

Now, point your app to `127.0.0.1:5432` with the user "airline-user", database "airline-demo" and password "password".

Explore this database and noticed that it's empty.

## Create SchemaHero Database object

Now that we have SchemaHero running in the cluster and a Postgres instance available, the next step is provide the database info to SchemaHero so that the operator can manage the database. 
We do this by deploying custom resource to the cluster with the connection information.

 A `database` definition will allow SchemaHero to manage the schema of the database. A `database` definition includes a name type and connection parameters.

Create a file named `airline-db.yaml` locally, copy the following YAML in it, and then run `kubectl apply -f ./airline-db.yaml` to deploy it.

 ```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: airlinedb
  namespace: schemahero-tutorial
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          secretKeyRef:
            name: postgresql
            key: uri 
```

Let's review this database object:

**Lines 1-2**: This is the GVK (Group, Version, Kind) of the object.
This should always be set to these same values, however the `v1alpha4` may change with future releases of SchemaHero.

**Line 4**: This is a new name that will be used by other SchemaHero objects to refer to this database.
It's common to set it to the same name as your database, but it's not required.

**Line 5:** The namespace of the object. This is where SchemaHero will watch for schemas, but is not related to the namespace of the database.
For our tutorial, we've chosen to deploy Postgres to this namespace, but SchemaHero easily supports the database in another namespace, another cluster, or externally managed (RDS, etc).

**Line 7-13:** This is the database reference that contains the data SchemaHero will need to connect to and authenticate into this database.
In this example, we are using a previously deployed secret (it was part of the Postgres deployment earlier).
SchemaHero supports reading credentials from inline, secrets or HashiCorp Vault.



Once that YAML is deployed, you can review it with:

```shell
kubectl get databases -n schemahero-tutorial

NAME        AGE
airlinedb   47m

```

And you can check the status of the connection to the database with:

## Next

Now that we have Postgres and SchemaHero running, next we will [deploy a new table using SchemaHero](/tutorial/create-table) to this instance.