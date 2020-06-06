# SchemaHero Docs

This is the source for https://schemahero.io.

There are 4 different documentation sites here, each using the same base Gatsby theme.

To run each, you should have NodeJS 12 and yarn.

## Theme

The theme is a gatsby child them from the gatsby-theme-apollo-docs theme.

We are using gatsby's component shadowing to make changes, but all shadowed components live in the `gatsby-theme-schemahero` directory.

Any style or configuration that's shared between all 4 child sites should be made to the theme.


Use the following commands to start each site:

| Site | Public URL | Command |
|------|------------|---------|
| Docs | https://schemahero.io/docs | `yarn workspace docs start` |
| Learn | https://schemahero.io/learn | `yarn workspace learn start` |
| Databases | https://schemahero.io/databases | `yarn workspace databases start` |
| Reference | https://schemahero.io/reference | `yarn workspace reference start` |
| CLI | https://schemahero.io/cli | `yarn workspace cli start` |
| Community | https://schemahero.io/community | `yarn workspace community start` |

## Deploying

When these docs are deployed, `gatsby build` is run on each site, and the generated docs are copied into a single folder.
The hosted docs are then deployed to Netlify.
