---
title: Deleting Tables
description: Deleting entire tables
---

By default, SchemaHero will not delete the table when you delete the `table` object. 
In other words, `kubectl apply -f ./my-table.yaml` will create a table, but `kubectl delete -f ./my-table.yaml` will not delete the table.

This decision was made out of caution. 
Deployment pipelines can experience outages. 
There are many different types of workflows to deploy to Kubernetes, and the last thing anyone would expect is that an outage in a workflow will drop a table from a database.

Instead, we've taken the approach of _declaring_ that you want the table deleted by commiting it, specifying the desired (Deleted) state.

For example, if you have a table:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metadata:
  name: users
spec:
  database: my-database
  name: users
  schema:
    postgres:
      primaryKey: [id]
      columns:
        - name: id
          type: integer
        - name: login
          type: varchar(255)
```

To remove this table, simply edit this file and re-deploy it with the following content:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metadata:
  name: users
spec:
  database: my-database
  name: users
  schema:
    postgres:
      isDeleted: true
```

This is a more intentional syntax, and doesn't result in accidental data loss.



