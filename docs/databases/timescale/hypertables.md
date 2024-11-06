---
title: Hypertables
description: Hypertables in Timescale
---

A hypertable is a table that is partitioned by time.
SchemaHero supports creating and managing hypertables.

## Creating a Hypertable

To create a hypertable, you need to specify the `hypertable` field in the `spec.tables` section of the database.

```yaml
apiVersion: databases.schemahero.io/v1alpha4
kind: Table
metadata:
  name: my-table
spec:
  database: my-database
  hypertable:
    timeColumnName: when
  columns:
    - name: when
      type: timestamp
    - name: value
      type: integer
```

When creating a hypertable, you need to specify the `timeColumnName` field.
All other fields are optional.

| Field Name | Description | 
|----|----|
| `timeColumnName` | Specifies the name of the timestamp column to use for time-based partitioning. This column serves as the primary dimension for organizing data in a time-series format. |
| `partitioningColumn` | Specifies an optional secondary column to partition by, creating space partitions within the hypertable. This is useful for multi-dimensional partitioning, such as by env_id alongside time. | 
| `numberPartitions` | Defines the number of partitions for the secondary partitioning column, if specified. For example, setting this to 4 will create 4 space partitions across the partitioningColumn. | 
| `chunkTimeInterval` | Sets the time interval for each chunk of data in the hypertable (e.g., 1 day, 1 hour). This interval defines how data is organized and distributed over time, allowing TimescaleDB to optimize storage and query performance for recent and older data. | 
| `createDefaultIndexes` | A boolean flag that, when true, automatically creates default indexes on the time and partitioning columns. These indexes improve performance for queries filtering by time and partitioning values. | 
| `ifNotExists` | When set to true, prevents errors if the hypertable already exists. This option is useful for idempotent operations or schema migrations. | 
| `partitioningFunc` | Specifies a hash or custom partitioning function for the secondary partitioning column. This is particularly useful for custom partitioning logic, distributing data based on a specific hash function or application-defined criteria | 
| `associatedSchemaName` | The schema in which any associated tables (e.g., indexes, compressed tables) will be created. If not specified, the default schema is used. | 
| `associatedTablePrefix` | Sets a prefix for associated tables (e.g., compressed or materialized views). This helps distinguish tables generated from this hypertable, which is helpful for organization and managing schema dependencies. | 
| `migrateData` | A boolean option to migrate existing data from a standard PostgreSQL table to a Timescale hypertable. If set to true, TimescaleDB will transform the existing table into a hypertable, retaining all data. | 
| `timePartitioningFunc` | Specifies the time partitioning function to apply to the timeColumnName. By default, this uses TIMESTAMPTZ. Adjust this if your time column needs a specific timezone or time-handling configuration. | 
| `replicationFactor` | Defines the replication factor for data within TimescaleDB’s distributed setup. Setting this replicates each chunk across multiple data nodes, increasing redundancy and availability. | 
| `dataNodes` | Lists the specific data nodes for distributed TimescaleDB setups. This field allows fine-grained control over the distribution of data across nodes, optimizing for specific requirements in availability or locality. | 
| `compression` | Enables native TimescaleDB compression for this hypertable. Specify settings such as the compression interval to manage data size and optimize long-term storage. Compression applies to chunks once they reach the specified interval, reducing storage needs for older data. | 
| `retention` | Sets a retention policy for automatically dropping older data from the hypertable. Define a time interval (e.g., 30 days) to specify how long data should be retained. Retention policies are critical for managing storage costs in high-volume time-series databases. | 

Compression and Retention fields are objects that contain subfields:

## Compression

| Field Name | Description | 
|----|----|
| `segmentBy` | Defines the column(s) to “segment by” during compression. This means that TimescaleDB will group data by the specified column(s) within each chunk before compressing it. This is particularly useful for time-series data with multiple dimensions (e.g., id) where quick retrieval of a subset of data is required. |
| `interval` | Defines the duration over which compression should be applied (e.g., 1 month, 3 months). This allows finer control over the compression frequency, particularly useful in scenarios where different data sets or partitions need distinct retention periods. For example, you might set a shorter interval for high-volume tables and a longer interval for less frequently queried tables. | 

# Retention

| Field Name | Description | 
|----|----|
| `interval` | Specifies the time interval for retaining data (e.g., 30 days, 1 year). Data older than this interval will be automatically deleted based on the defined retention policy. This setting ensures that only data within the specified time window remains in the hypertable, while older data is removed to free up storage. |
