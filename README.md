# SchemaHero Docs

There are 4 different documentation sites here, each using the same base Gatsby theme.

To run each, you should have NodeJS 12 and yarn.

## Theme

The theme is a gatsby child them from the gatsby-theme-apollo-docs theme. 

We are using gatsby's component shadowing to make changes, but all shadowed components live in the `gatsby-theme-schemahero` directory.

Any style or configuration that's shared between all 4 child sites should be made to the theme.

## Docs
The site that is hosted at https://schemahero.io/docs can be started with:

```
yarn workspace docs start
```

## Learn
The site that is hosted at https://schemahero.io/learn can be started with:

```
yarn workspace learn start
```