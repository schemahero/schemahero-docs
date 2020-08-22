const themeOptions = {
  siteName: 'SchemaHero Community',
  pageTitle: 'SchemaHero Community',
  menuTitle: 'SchemaHero',
  baseDir: 'community',
  contentDir: 'source',
};

module.exports = {
  pathPrefix: '/community',
  plugins: [
    {
      resolve: '../gatsby-theme-schemahero',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'SchemaHero Community',
        description: 'SchemaHero Community',
        githubRepo: 'schemahero/schemahero-docs',
        sidebarCategories: {
          null: ['index', 'roadmap'],
          'Contributing': [
            'contributing/index',
            'contributing/dev-environment',
          ],
        },
      },
    },
  ],
};
