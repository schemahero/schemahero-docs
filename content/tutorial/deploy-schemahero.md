---
date: 2019-05-25
linktitle: "SchemaHero Tutorial: Deploy SchemaHero"
weight: 20
something: true
---

## Deploy the SchemaHero operator

SchemaHero is designed to run in a Kubernetes cluster. To install:

```
kubectl apply -f https://raw.githubusercontent.com/schemahero/schemahero/master/install/schemahero/schemahero-operator.yaml
```

This will create a `schemahero-system` namespace, and deploy the SchemaHero manager. You can confirm that SchemaHero is installed by executing:

```
kubectl get databases
No resources found
```
