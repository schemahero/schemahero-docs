---
date: 2020-04-05
linktitle: "Operatorless Mode"
title: Operatorless Mode
weight: 5
---

It's possible to run SchemaHero in Kubernetes (or other environments) without running the in-cluster operator. This is useful when shipping software on-prem (such as with [KOTS](https://kots.io)) and you don't want to require cluster-admin level permissions that are necessary to install a CustomResourceDefinition.

To do this, you'll build a new Docker image using the SchemaHero image as the base image. This Docker image will be the image used in a Kubernetes Job. The Job will contain an initContainer to execute the plan phase and a container to apply. There is no elevated access required, and this method does not rely on any external resources such as PersistentVolumeClaims.

An example of the required Dockerfile is:

```Dockerfile
FROM schemahero/schemahero:0.8.0-alpha.3

ADD --chown=schemahero:schemahero ./tables ./tables
```

And the required Kubernetes Job manifest to run these migrations:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: my-migrations
  annotations:
    "kots.io/hook-delete-policy": "hook-succeeded, hook-failed"
spec:
  template:
    spec:
      volumes:
        - name: migrations
          emptyDir:
            medium: Memory
      restartPolicy: OnFailure
      initContainers:
        - image: my-migrations-image
          name: migrations-plan
          volumeMounts:
            - name: migrations
              mountPath: /migrations
          env:
            - name: SCHEMAHERO_DRIVER
              value: postgres
            - name: SCHEMAHERO_SPEC_FILE
              value: /tables
            - name: SCHEMAHERO_OUT
              value: /migrations
            - name: SCHEMAHERO_URI
              valueFrom:
                secretKeyRef:
                  name: my-postgres-secret
                  key: uri
      containers:
        - image: my-migrations-image
          name: migrations-apply
          volumeMounts:
            - name: migrations
              mountPath: /migrations
          env:
            - name: SCHEMAHERO_DRIVER
              value: postgres
            - name: SCHEMAHERO_DDL
              value: /migrations
            - name: SCHEMAHERO_URI
              valueFrom:
                secretKeyRef:
                  name: my-postgres-secret
                  key: uri

```
