---
title: Table
description: Reference for schemas.schemahero.io/v1alpha4, Kind=Table
---

```yaml
apiVersion: databases.schemahero.io/v1alpha4 # version
kind: Table                 # always Table
metadata:
  name:                     # Kubernetes object name
  namespace:                # Kubernetes namespace
spec:
  database:                 # name of the database object
  name:                     # actual name of the table to create
  schema:                   # defining the schema of the table
    postgres:               # this is a postgres schema
      primaryKey:           # array of column names in the primary key
      foreignKeys:          # defining the foreign keys
        - columns:          # columns in the foreign key
            - colname       # include this column in foreign key
          references:       # other side of the reference
            table:          # table name the key references
            columns:        # foreign table columns
              - colname     # a column in the foreign table
      indexes:              # local indexes
        - columns:          # define columns in the index
            - colname       # a column in the index
          name:             # name of the index
          isUnique:         # bool indicating a unique index
      columns:              # defining the columns
        - name:             # name of the column
          type:             # data type of the column
          contstraints:     # adding constraints to this column
            notNull:        # set "not null" on the column
    mysql:                  # this is a mysq schema
      primaryKey:           # array of column names in the primary key
      foreignKeys:          # defining the foreign keys
        - columns:          # columns in the foreign key
            - colname       # include this column in foreign key
          references:       # other side of the reference
            table:          # table name the key references
            columns:        # foreign table columns
              - colname     # a column in the foreign table
      indexes:              # local indexes
        - columns:          # define columns in the index
            - colname       # a column in the index
          name:             # name of the index
          isUnique:         # bool indicating a unique index
      columns:              # defining the columns
        - name:             # name of the column
          type:             # data type of the column
          contstraints:     # adding constraints to this column
            notNull:        # set "not null" on the column
    cockroachdb:            # this is a cockroachdb schema
      primaryKey:           # array of column names in the primary key
      foreignKeys:          # defining the foreign keys
        - columns:          # columns in the foreign key
            - colname       # include this column in foreign key
          references:       # other side of the reference
            table:          # table name the key references
            columns:        # foreign table columns
              - colname     # a column in the foreign table
      indexes:              # local indexes
        - columns:          # define columns in the index
            - colname       # a column in the index
          name:             # name of the index
          isUnique:         # bool indicating a unique index
      columns:              # defining the columns
        - name:             # name of the column
          type:             # data type of the column
          contstraints:     # adding constraints to this column
            notNull:        # set "not null" on the column
