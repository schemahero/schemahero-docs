---
date: 2019-05-25
linktitle: "SchemaHero Tutorial: Deploy Postgres"
menu:
  main:
    parent: tutorial
next: /tutorial/deploy-schemahero
title: Deploy Postgres
weight: 10
---

## Deploy Postgres

To create a place to learn and understand SchemaHero, let's deploy a test instance of Postgres. This will run in the local cluster, and can be deleted when the tutorial is completed. If you have a test Postgres server already, feel free to skip this step and connect SchemaHero to that database.

There's a Kubernetes YAML for postgres in this repo. Let's deploy that and we will get a StatefulSet named `postgresql` with a 1 GB PersistentVolumeClaim.

```
kubectl apply -f https://raw.githubusercontent.com/schemahero/schemahero/master/config/dev/database/postgres.yaml
```

After deploying this, you can connect to your postgres database from the CLI using:

```
kubectl exec -it postgresql-0 psql -- -U testuser -d testdb
```

When promoted, the password for "testuser" is "password".

If you'd prefer to connect to this database using a local GUI such as SequelPro, run:

```
kubectl port-forward svc/postgresl 5432:5432
```

And then point your app to 127.0.0.:5432 with the user "testuser", database "testdb" and password "password".

Explore this database. Notice that it's empty.
