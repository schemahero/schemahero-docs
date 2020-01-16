---
date: 2019-07-05
linktitle: "Amazon RDS"
title: Connecting to Amazon RDS
weight: 5
---

SchemaHero can manage a MySQL or Postgres schema running in RDS without any additional requirements.

The recommended way to connect SchemaHero to RDS is to deploy a secret to your cluster that contains the database connection credentials.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: rds-postgres
  namespace: default
stringData:
  uri: postgresql://user:password@db-instance.name.us-east-1.rds.amazonaws.com/db-name?connect_timeout=10&application_name=schemahero
```

Then, deploy the database connection using:

```yaml
apiVersion: databases.schemahero.io/v1alpha3
kind: Database
metadata:
  name: rds-postgres
  namespace: default
connection:
  postgres:
    uri:
      valueFrom:
        secretKeyRef:
          key: uri
          name: rds-postgres
```

Once these are deployed, you can deploy tables using the standard SchemaHero tools, and the schemas will be applied to the RDS instance defined in the secret.
