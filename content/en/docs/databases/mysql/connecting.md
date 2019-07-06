---
date: 2019-05-25
linktitle: "Connecting"
title: Connecting
weight: 20220
---

SchemaHero accepts a DSN (Data Source Name) in the `uri` field when connecting to a MySQL database. This connection string supports many options, and full documentation can be found here: https://github.com/go-sql-driver/mysql#dsn-data-source-name.

An example of connecting to a local, in-cluster MySQL StatefulSet that is not running TLS:

```yaml
apiVersion: databases.schemahero.io/v1alpha1
kind: Database
metadata:
  name: my-database
connection:
  mysql:
    uri:
      value: username:password@tcp(host:3306)/dbname?tls=false
```

