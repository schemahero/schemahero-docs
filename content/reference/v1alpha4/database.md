---
date: 2020-05-24
linktitle: "Database"
title: database/v1alpha4
weight: 1
---

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: testdb
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          secretKeyRef:
            name: postgresql-secret
            key: uri
```