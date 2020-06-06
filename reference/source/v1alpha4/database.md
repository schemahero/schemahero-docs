---
title: Database
description: Reference for databases.schemahero.io/v1alpha4, Kind=Database
---

```yaml
apiVersion: databases.schemahero.io/v1alpha4 # version
kind: Database              # always Database
metadata:
  name:                     # Kubernetes object name
  namespace:                # Kubernetes namespace
spec:
  enableShellCommand:       # bool indicating if shell command is enabled
  immediateDeploy:          # when true, automatically apply plans
  schemahero:
    image:                  # override default schemahero image for plans and applies
    nodeSelector:           # nodeSelector to apply to plans an applies
  connection:               # db connection
    postgres:               # postgresql definition
      uri:                  # parse postgresql connection string from uri
        value:              # pg connection string
        valueFrom:          # read the uri from...
          secretKeyRef:     # ... from a secret
            name:           # secret name containing pg uri
            key:            # key in secret containing uri
          vault:            # read pg connection from vault
            secret:         # name of secret in vault
            role:           # role to use in vault
    mysql:                  # mysql definition
      uri:                  # parse mysql connection string from uri
        value:              # mysql connection string
        valueFrom:          # read the uri from...
          secretKeyRef:     # ... from a secret
            name:           # secret name containing mysql uri
            key:            # key in secret containing uri
          vault:            # read mysql connection from vault
            secret:         # name of secret in vault
            role:           # role to use in vault
```
