---
title: Fixture Generation
description: Fixture Generation
---

It can be desirable to have a schema defined in `CREATE TABLE` syntax to enable automated tests. 
This is often useful as fixtures for a test workflow.

SchemaHero can generate a `.SQL` file with statements for this reason.

## Running Fixtures

You can generate fixtures from table files using the `schemahero` binary or docker container.

### shell

```shell
schemahero fixtures \
  --input /path/to/tables \
  --output . \
  --dbname my-database \
  --driver postgres
```

### Docker

```docker
docker run schemahero/schemahero \
  -v `pwd`:/out \
  -v /path/to/tables:/in \
  fixtures \
    --input-dir /in \
    --output-dir /out \
    --dbname my-database \
    --driver postgres
```
