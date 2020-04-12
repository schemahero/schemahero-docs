---
date: 2019-05-25
linktitle: "Create a table"
title: Create a table
weight: 40
---

Now we can start playing with schema management!

Let's create a fictious airline, and start to build a database schema for them.

We need a table that will hold all reservations. The table should look like this:

// pic

Ordinarilly, this table could be created with a command like:

```sql
CREATE TABLE reservation
  (
    id char(8) not null primary key,
    created_at timestamp not null,
    first_name varchar(40),
    last_name varchar(40),
    flight_number char(4),
    flight_date timestamp not null
  )
```

Instead, let's define it in SchemaHero. Create a file called `reservation.yaml` and paste the following into it:

```yaml
apiVersion: schemas.schemahero.io/{{< schemaheroAPIVersion >}}
kind: Table
metadata:
  name: reservation
spec:
  database: schemahero-tutorial
  name: reservation
  schema:
    postgres:
      primaryKey: [id]
      columns:
        - name: id
          type: char(8)
        - name: created_at
          type: timestamp
          constraints:
            notNull: true
        - name: first_name
          type: varchar(40)
        - name: last_name
          type: varchar(40)
        - name: flight_number
          type: char(4)
        - name: flight_date
          type: timestamp
          constraints:
            notNull: true
```

After saving this, `kubectl apply` it.

After a second or two, the "reservation" table should be created in the database. If you are connected using `psql`, try `\dt` and it should show this table.

