---
date: 2019-07-05
linktitle: "Viewing SQL statements"
title: Viewing SQL statements
weight: 70010
---

{{% pageinfo %}}
Note: This is a planned feature, coming in v1alpha3. This feature is not yet available in the most recent version.
{{% /pageinfo %}}

When SchemaHero applies a migration, it gets the current state of the table/column and comares that to the desired state that's defined in the custom resource. SchemaHero then generates and applies SQL statements to create, drop, or alter a table or column.

If something isn't working right, the best place to start debugging is to look at the generated SQL statements. The last executed SQL statement (and the result) is attached to the `table` object.

Given a table like this:

```yaml
apiVersion: schemas.schemahero.io/v1alpha1
kind: Table
metadata:
  name: reservation
spec:
  database: schemahero-tutorial
  name: reservation
  schema:
    postgres:
      primaryKey: [id]
      columns:
        - name: id
          type: char(8)
```

Immediately after deploying this resource, the command `kubectl describe table reservation` will show:

```

```


If we then add a `created_at` field, and `kubectl apply` the resource, now the `kubectl describe table reservation` will show:

```

```

## Previous SQL Commands

All previous SQL commands generated and executed are stored in the SchemaHero manager. To access this, you can exec into the `schemahero-manager` pod and query it:

```
kubectl exec -t -n schemahero-system schema-hero-manager-0 /schemahero logs --database schemahero-tutorial --table reservation
```
