---
title: Amazon SSM Parameter Store
description: Secure Credentials Using Amazon SSM Parameter Store
---

SchemaHero can retrieve database credentials from an [AWS SSM Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).
SchemaHero can read encrypted or plain text secrets that contain a Database connection URI.

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Database
metadata:
  name: my-db
  namespace: namespace
spec:
  connection:
    postgres:
      uri:
        valueFrom:
          ssm:
            name: "/schemahero/key-name"
            withDecryption: true
            region: "us-east-1"
            accessKeyId:
              value: "---"
            secretAccessKey:
              valueFrom:
                secretKeyRef:
                  name: "aws"
                  key: "secretKeyRef"
```

| name | description |
|------|-------------|
| `name` | The path to the key in the Parameter Store |
| `withDecryption` | A boolean indicating if the value is encrypted |
| `region` | The AWS region |
| `accessKeyId` | The AWS Access Key ID (optional, see below). Supports value and valueFrom |
| `secretAccessKey` | The AWS Secret Access Key (optional, see below). Supports value and valueFrom |


## Access Key ID and Secret Access Key

If the `accessKeyId` and `secretAccessKey` values are both empty, SchemaHero will use the instance role.
This is a secure way to configure AWS credentials on instances.

