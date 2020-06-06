---
title: Next Steps
description: Next Steps
---

We've gone through the basic of SchemaHero by deploying a database, creating a schema and then editing the schema.
SchemaHero can do a lot more, including run simple migrations, manage tables and migrations that depend on each other and more.

## Cleaning Up

To remove the tutorial resources from your Kubernetes cluster, you can simply delete the `schemahero-tutorial` namespace:

```shell
kubectl delete ns schemahero-tutorial
```

If you'd like to also remove SchemaHero from your cluster, read the [uninstall docs](https://schemahero.io/docs/installing/uninstall/).

## What's next

This tutorial should continue to expand with more use cases.
For now, try experimenting with it, and open an issue on [github.com/schemahero/schemahero](https://github.com/schemahero/schemahero) if run into problems or have questions!

