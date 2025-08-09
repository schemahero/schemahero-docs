---
title: Data Migrations
description: Understanding and using data migrations with SchemaHero
---

SchemaHero supports both schema migrations and data migrations, allowing you to manage complete database changes in a unified workflow.

## Schema vs Data Migrations

### Schema Migrations
Schema migrations alter the structure of the database - creating tables, changing columns, adding indexes, etc. These are the core focus of SchemaHero and are always expressed declaratively.

### Data Migrations  
Data migrations modify the actual data in your database - updating column values, calculating derived fields, transforming data formats, etc. SchemaHero now supports imperative data migrations alongside schema changes.

## Data Migration Types

SchemaHero supports four types of data migration operations:

### 1. Static Updates
Update columns with static values:

```yaml
apiVersion: schemas.schemahero.io/v1alpha4
kind: DataMigration
metadata:
  name: set-defaults
spec:
  database: mydb
  name: set-defaults
  schema:
    postgres:
      - staticUpdate:
          table: users
          set:
            status: "active"
            region: "us-east-1"
          where: "status IS NULL"
```

### 2. Calculated Updates
Update columns using calculated expressions from other columns:

```yaml
- calculatedUpdate:
    table: users
    calculations:
      - column: full_name
        expression: "CONCAT(first_name, ' ', last_name)"
      - column: display_email
        expression: "LOWER(email)"
    where: "full_name IS NULL"
```

### 3. Data Transformations
Perform common data transformations like timezone conversions, type casting, and string operations:

```yaml
- transformUpdate:
    table: events
    transformations:
      - column: created_at
        transformType: timezone_convert
        fromValue: UTC
        toValue: America/New_York
      - column: email
        transformType: format_change
        toValue: lowercase
    where: "created_at IS NOT NULL"
```

### 4. Custom SQL
Execute arbitrary SQL for complex business logic:

```yaml
- customSQL:
    sql: |
      UPDATE orders 
      SET total_with_tax = subtotal * 1.08,
          status = 'processed'
      WHERE status = 'pending'
    validate: true
```

## Execution Control

### Execution Order
Control when data migrations run relative to schema changes:

```yaml
spec:
  executionOrder: after_schema  # or "before_schema"
```

### Idempotency
Mark migrations as safe to re-run:

```yaml
spec:
  idempotent: true  # Can be executed multiple times safely
```

### Dependencies
Specify migration dependencies:

```yaml
spec:
  requires:
    - table-schema-migration
    - initial-data-setup
```

## CLI Usage

Plan and apply data migrations using the SchemaHero CLI:

```bash
# Plan data migration
kubectl-schemahero plan \
  --driver=postgres \
  --uri="postgres://user:pass@localhost:5432/db" \
  --spec-file=data-migration.yaml \
  --spec-type=datamigration

# Apply the generated SQL
kubectl-schemahero apply \
  --driver=postgres \
  --uri="postgres://user:pass@localhost:5432/db" \
  --ddl=migration.sql
```

## Database Support

- ✅ **PostgreSQL** - Full support for all data migration types
- ✅ **CockroachDB** - Uses PostgreSQL implementation (full support)
- ❌ **MySQL** - Not yet implemented
- ❌ **SQLite** - Not yet implemented  
- ❌ **TimescaleDB** - Not yet implemented
- ❌ **Cassandra** - Not yet implemented

*Note: While SchemaHero supports schema migrations for all these databases, data migrations are currently only implemented for PostgreSQL and CockroachDB.*

## Best Practices

1. **Test First** - Always test data migrations on a copy of production data
2. **Use Transactions** - Wrap complex migrations in transactions when possible
3. **Idempotent Design** - Design migrations to be safely re-runnable
4. **Backup Data** - Always backup your data before running migrations
5. **Incremental Approach** - Break complex migrations into smaller steps

## Common Use Cases

- Setting default values for new columns
- Calculating derived fields from existing data  
- Normalizing data formats (email case, phone numbers)
- Converting between data types or units
- Migrating data between columns or tables
- Applying business logic updates to existing records

Data migrations complement SchemaHero's schema management capabilities, providing a complete solution for database evolution.
