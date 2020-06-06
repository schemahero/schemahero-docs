const themeOptions = {
  siteName: 'SchemaHero Reference',
  pageTitle: 'SchemaHero Reference',
  menuTitle: 'SchemaHero',
  baseDir: 'reference',
  contentDir: 'source',
};

module.exports = {
  pathPrefix: '/reference',
  plugins: [
    {
      resolve: '../gatsby-theme-schemahero',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'SchemaHero Reference',
        description: 'SchemaHero Reference',
        githubRepo: 'schemahero/schemahero-docs',
        sidebarCategories: {
          null: ['index'],
          v1alpha4: [
            'v1alpha4/database',
            'v1alpha4/table',
            'v1alpha4/migration',
          ],
        },
      },
    },
  ],
};
