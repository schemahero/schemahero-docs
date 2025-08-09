---
title: DataMigration
description: Reference for schemas.schemahero.io/v1alpha4, Kind=DataMigration
---

```yaml
apiVersion: schemas.schemahero.io/v1alpha4  # version
kind: DataMigration                         # always DataMigration
metadata:
  name:                                     # Kubernetes object name
  namespace:                                # Kubernetes namespace
spec:
  database:                                 # name of the database object
  name:                                     # actual name of the migration
  executionOrder:                           # when to run: "before_schema" | "after_schema" (default)
  idempotent:                               # boolean, can migration be run multiple times safely
  requires:                                 # array of migration dependencies
    - migration-name                        # name of required migration
  schema:                                   # database-specific migration operations
    postgres:                               # postgres operations array
      - staticUpdate:                       # static value updates
          table:                            # table name
          set:                              # map of column: value pairs
            column_name: "static_value"     # column to update with static value
          where:                            # optional WHERE clause
      - calculatedUpdate:                   # calculated value updates
          table:                            # table name
          calculations:                     # array of calculations
            - column:                       # column name to update
              expression:                   # SQL expression for calculation
          where:                            # optional WHERE clause
      - transformUpdate:                    # data transformation operations
          table:                            # table name
          transformations:                  # array of transformations
            - column:                       # column name to transform
              transformType:                # type: "timezone_convert" | "type_cast" | "format_change" | "string_transform"
              fromValue:                    # source value (for timezone_convert)
              toValue:                      # target value (for timezone_convert, type_cast, format_change)
              parameters:                   # additional parameters for string_transform
                type:                       # "replace" | "substring"
                old:                        # old value for replace
                new:                        # new value for replace
                start:                      # start position for substring
                length:                     # length for substring
          where:                            # optional WHERE clause
      - customSQL:                          # custom SQL execution
          sql:                              # SQL statement(s) to execute
          validate:                         # boolean, perform basic SQL validation
```

## Static Updates

Update columns with static values:

```yaml
- staticUpdate:
    table: users
    set:
      status: "active"
      region: "us-east-1"
      updated_at: "CURRENT_TIMESTAMP"
    where: "status IS NULL"
```

## Calculated Updates

Update columns using expressions calculated from other columns:

```yaml
- calculatedUpdate:
    table: users
    calculations:
      - column: full_name
        expression: "CONCAT(first_name, ' ', last_name)"
      - column: display_email
        expression: "LOWER(email)"
    where: "full_name IS NULL OR display_email IS NULL"
```

## Transform Updates

### Timezone Conversion
```yaml
- transformUpdate:
    table: events
    transformations:
      - column: created_at
        transformType: timezone_convert
        fromValue: UTC
        toValue: America/New_York
    where: "timezone_converted = false"
```

### Type Casting
```yaml
- transformUpdate:
    table: products
    transformations:
      - column: price
        transformType: type_cast
        toValue: "decimal(10,2)"
```

### Format Changes
```yaml
- transformUpdate:
    table: users
    transformations:
      - column: email
        transformType: format_change
        toValue: lowercase
      - column: username
        transformType: format_change
        toValue: uppercase
```

### String Transformations
```yaml
- transformUpdate:
    table: products
    transformations:
      - column: sku
        transformType: string_transform
        parameters:
          type: replace
          old: "OLD-"
          new: "NEW-"
      - column: description
        transformType: string_transform
        parameters:
          type: substring
          start: "1"
          length: "100"
```

## Custom SQL

Execute arbitrary SQL statements:

```yaml
- customSQL:
    sql: |
      UPDATE orders 
      SET total_with_tax = subtotal * 1.08,
          loyalty_points = FLOOR(subtotal * 0.01)
      WHERE status = 'completed' 
        AND total_with_tax IS NULL
    validate: true
```

## Complete Example

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: DataMigration
metadata:
  name: user-data-cleanup
  namespace: production
spec:
  database: userdb
  name: user-data-cleanup
  executionOrder: after_schema
  idempotent: true
  requires:
    - user-table-schema
  schema:
    postgres:
      # Set default values
      - staticUpdate:
          table: users
          set:
            status: "active"
            notification_enabled: "true"
          where: "status IS NULL"
      
      # Calculate derived fields
      - calculatedUpdate:
          table: users
          calculations:
            - column: full_name
              expression: "TRIM(CONCAT(first_name, ' ', last_name))"
            - column: display_email
              expression: "LOWER(email)"
          where: "full_name IS NULL"
      
      # Transform data formats
      - transformUpdate:
          table: users
          transformations:
            - column: created_at
              transformType: timezone_convert
              fromValue: UTC
              toValue: America/New_York
            - column: phone
              transformType: string_transform
              parameters:
                type: replace
                old: "-"
                new: ""
          where: "timezone_converted = false"
      
      # Apply business logic
      - customSQL:
          sql: |
            UPDATE users 
            SET subscription_tier = CASE 
              WHEN total_purchases > 1000 THEN 'premium'
              WHEN total_purchases > 100 THEN 'standard'
              ELSE 'basic'
            END
            WHERE subscription_tier IS NULL
          validate: true
```

## Execution Control

### Execution Order
- `before_schema`: Execute before schema migrations
- `after_schema`: Execute after schema migrations (default)

### Idempotency
- `true`: Migration can be safely re-executed
- `false`: Migration should only run once

### Dependencies
List other migrations that must complete before this one runs.

## Database Support

Currently supported databases:
- **PostgreSQL**: Full support for all operation types
- **CockroachDB**: Uses PostgreSQL implementation (full support)
- **MySQL**: Not yet implemented
- **SQLite**: Not yet implemented
- **TimescaleDB**: Not yet implemented
- **Cassandra**: Not yet implemented
