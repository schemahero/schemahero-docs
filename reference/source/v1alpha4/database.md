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
            endpoint:       # the endpoint of the vault api server
            serviceAccount: # the service account in k8s containing the vault auth
            serviceAccountNamespace: # namespace of the service account
            agentInject:    # when set, apply vault annotations
            connectionTemplate: # when set, use this Go template to form the uri
            kubernetesAuthEndpoint: # when set, use this path instead of the Vault default (https://www.vaultproject.io/docs/auth/kubernetes#via-the-cli)
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
            endpoint:       # the endpoint of the vault api server
            serviceAccount: # the service account in k8s containing the vault auth
            serviceAccountNamespace: # namespace of the service account
            agentInject:    # when set, apply vault annotations
            connectionTemplate: # when set, use this Go template to form the uri
            kubernetesAuthEndpoint: # when set, use this path instead of the Vault default (https://www.vaultproject.io/docs/auth/kubernetes#via-the-cli)
          ssm:              # use aws parameter store ssm
            name:           # key name in ssm
            withDecryption: # when set, decrypt
            region:         # aws region name
            accessKeyId:    # the aws access key id to use (leave empty for instance role)
              value:        # the static value of
              valueFrom:    # read the aws access key id from...
                secretKeyRef: # ... from a secret
                  key:      # key in the secret
                  name:     # name of the secret
            secretAccessKey: # the aws secret access key (leave empty for instance role)
              value:        # the static value
                valueFrom:    # read the aws secret access key from...
                secretKeyRef: # ... from a secret
                  key:      # key in the secret
                  name:     # name of the secret

```
