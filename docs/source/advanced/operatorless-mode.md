---
title: Operatorless Mode
description: Operatorless Mode
---

It's possible to have the basic functionality of SchemaHero, without running the in-cluster operator.
This option makes it possible to run SchemaHero in environments that do not have Kubernetes.
This is useful when shipping software on-prem (such as with [KOTS](https://kots.io)), and you don't want to require cluster-admin level permissions that are necessary to install a CustomResourceDefinition.

## Missing Features

When running SchemaHero without the in-cluster operator, there will won't be seperate plan and apply phases.
Changes made and submitted will be applied automatically.
Additionally, the `kubectl` plugin will not work without the operator, including the `kubectl schemahero shell` command.

## Running Without the Operator

To do this, you'll build a new Docker image using the SchemaHero image as the base image.
This Docker image will be the image used in a Kubernetes Job. The Job will contain an initContainer to execute the plan phase and a container to apply.
There is no elevated access required, and this method does not rely on any external resources such as PersistentVolumeClaims.

An example of the required Dockerfile is:

```Dockerfile
FROM schemahero/schemahero:0.11.2
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
          args: ["plan"]
          env:
            - name: SCHEMAHERO_DRIVER
              value: postgres
            - name: SCHEMAHERO_SPEC_FILE
              value: /tables
            - name: SCHEMAHERO_OUT
              value: /migrations/plan.yaml
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
          args: ["apply"]
          env:
            - name: SCHEMAHERO_DRIVER
              value: postgres
            - name: SCHEMAHERO_DDL
              value: /migrations/plan.yaml
            - name: SCHEMAHERO_URI
              valueFrom:
                secretKeyRef:
                  name: my-postgres-secret
                  key: uri

```
