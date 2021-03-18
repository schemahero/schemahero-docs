---
title: Modify Table
description: Modify Table
---

In this step, we are going to deploy a table and then make a change to it.

## Create the schedule table

Similar to the last step, let's create a `schedule` table that has the following schema:

<img src="/images/schedule-table.svg">

To accomplish this, create a local file named `schedule-table.yaml` and paste the following contents into it:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metadata:
  name: schedule
  namespace: schemahero-tutorial
spec:
  database: airlinedb
  name: schedule
  schema:
    postgres:
      primaryKey: [flight_num]
      columns:
        - name: flight_num
          type: int
        - name: origin
          type: char(4)
          constraints:
            notNull: true
        - name: destination
          type: char(4)
          constraints:
            notNull: true
        - name: departure_time
          type: time
          constraints:
            notNull: true
        - name: arrival_time
          type: time
          constraints:
            notNull: true
```

After saving this file, deploy it using:

```shell
kubectl apply -f ./schedule-table.yaml -n schemahero-tutorial
```

Wait for this migration to be planned.
Check on the migration status by running:

```shell
kubectl schemahero get migrations -n schemahero-tutorial
```

When the schedule table migration is ready, it will show up in the output:

```shell
ID       DATABASE   TABLE     PLANNED  EXECUTED  APPROVED  REJECTED
a9626a8  airlinedb  schedule  21s
eaa36ef  airlinedb  airport   4h       3h        3h
```

Let's apply this migration:

```shell
kubectl schemahero -n schemahero-tutorial approve migration a9626a8
```

To confirm, open Beekeeper Studio and see the schedule table:

<img src="/images/schedule-table.png">

## Change columns

Let's make a few changes to this table schema now:
- Make the `departure_time` and `arrival_time` columns nullable
- Add a new column named `duration`

To do this, open the `schedule.yaml` file and make these changes.
Remove the `constraints` from the `departure_time` and the `arrival_time` columns.
Add a new column named `duration`, type `int`, with no constraints.

The file should look like this:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metadata:
  name: schedule
  namespace: schemahero-tutorial
spec:
  database: airlinedb
  name: schedule
  schema:
    postgres:
      primaryKey: [flight_num]
      columns:
        - name: flight_num
          type: int
        - name: origin
          type: char(4)
          constraints:
            notNull: true
        - name: destination
          type: char(4)
          constraints:
            notNull: true
        - name: departure_time
          type: time
        - name: arrival_time
          type: time
        - name: duration
          type: int
```

Apply this change using `kubectl`:

```shell
kubectl apply -f ./schedule-table.yaml
```

Just like before, list the migrations:

```shell
kubectl schemahero get migrations -n schemahero-tutorial
```

This time, there will be a new migration pending:

```shell
ID       DATABASE   TABLE     PLANNED  EXECUTED  APPROVED  REJECTED
a9626a8  airlinedb  schedule  9m30s    7m58s     8m0s
eaa36ef  airlinedb  airport   4h       4h        4h
fa32022  airlinedb  schedule  5s
```

## View the migration

We can now view the migration:

```shell
kubectl schemahero -n schemahero-tutorial describe migration fa32022
```

And the output is now:

```shell

Migration Name: fa32022

Generated DDL Statement (generated at 2020-06-06T14:56:04-07:00):
  alter table "schedule" alter column "departure_time" type time, alter column "departure_time" drop not null;
  alter table "schedule" alter column "arrival_time" type time, alter column "arrival_time" drop not null;
  alter table "schedule" add column "duration" integer;


To apply this migration:
  kubectl schemahero -n schemahero-tutorial approve migration fa32022

To recalculate this migration against the current schema:
  kubectl schemahero -n schemahero-tutorial recalculate migration fa32022

To deny and cancel this migration:
  kubectl schemahero -n schemahero-tutorial  reject migration fa32022
```

Let's review this migration.
The Generated DDL statements now include 3 different statements.
SchemaHero has compared the YAML we just deployed to the actual database schema, and generated the commands above.

## Approve the migration

Once again, we can approve this migration:

```shell
kubectl schemahero -n schemahero-tutorial approve migration fa32022
```

SchemaHero will show that it's been approved by printing:

```shell
Migration fa32022 approved
```

## Verify in the database management utility

Refreshing the table view in Beekeeper Studio, we can see the change has been applied:

<img src="/images/modified-schedule-table.png">

## Adding a foreign key

Let's make another change.
This time, we want to add a foreign key to make sure that all data entered in the `origin` and `destination` columns are present in the `airport` table.

To add a foreign key, we can edit the `schedule.yaml` and add the foreignKey constraints to this table.
The updated table YAML will look like:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: Table
metadata:
  name: schedule
  namespace: schemahero-tutorial
spec:
  database: airlinedb
  name: schedule
  schema:
    postgres:
      primaryKey: [flight_num]
      foreignKeys:
        - columns:
            - origin
          references:
            table: airport
            columns:
              - code
        - columns:
          - destination
          references:
            table: airport
            columns:
              - code
      columns:
        - name: flight_num
          type: int
        - name: origin
          type: char(4)
          constraints:
            notNull: true
        - name: destination
          type: char(4)
          constraints:
            notNull: true
        - name: departure_time
          type: time
        - name: arrival_time
          type: time
        - name: duration
          type: int
```

Once again, apply and view the migration:

```shell
kubectl apply -f ./schedule-table.yaml
```

```shell
kubectl schemahero get migrations -n schemahero-tutorialID       DATABASE   TABLE     PLANNED  EXECUTED  APPROVED  REJECTED
```

```shell
a9626a8  airlinedb  schedule  22m      20m       20m
b12d3fd  airlinedb  schedule  54s
eaa36ef  airlinedb  airport   4h       4h        4h
fa32022  airlinedb  schedule  12m      9m36s     9m44s
```

```shell
kubectl schemahero -n schemahero-tutorial describe migration b12d3fd
```

```

Migration Name: b12d3fd

Generated DDL Statement (generated at 2020-06-06T15:07:54-07:00):
  alter table "schedule" alter column "departure_time" type time;
  alter table "schedule" alter column "arrival_time" type time;
  alter table schedule add constraint schedule_origin_fkey foreign key (origin) references airport (code);
  alter table schedule add constraint schedule_destination_fkey foreign key (destination) references airport (code);


To apply this migration:
  kubectl schemahero -n schemahero-tutorial approve migration b12d3fd

To recalculate this migration against the current schema:
  kubectl schemahero -n schemahero-tutorial recalculate migration b12d3fd

To deny and cancel this migration:
  kubectl schemahero -n schemahero-tutorial reject migration b12d3fd
```

You can see in the Generated DDL that the new foreign keys will be applied:

```
  alter table schedule add constraint schedule_origin_fkey foreign key (origin) references airport (code);
  alter table schedule add constraint schedule_destination_fkey foreign key (destination) references airport (code);
```

## Approve and verify

Approve the migration:

```shell
kubectl schemahero -n schemahero-tutorial approve migration b12d3fd
```

You can use your database management utility to verify that the migration was applied, and the foreign keys now exist.

## Next steps

Next, we'll review what we've done in this tutorial and help you figure out how to use SchemaHero in your environment.
