const themeOptions = {
  siteName: 'SchemaHero Changelog',
  pageTitle: 'SchemaHero Changelog',
  menuTitle: 'SchemaHero',
  baseDir: 'changelog',
  contentDir: 'source',
};

module.exports = {
  pathPrefix: '/changelog',
  plugins: [
    {
      resolve: '../gatsby-theme-schemahero',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'SchemaHero Changelog',
        description: 'SchemaHero Changelog',
        githubRepo: 'schemahero/schemahero-docs',
        sidebarCategories: {
          null: ['index'],
          'Changelog': [
            'releases/0.9.0',
          ],
        },
      },
    },
  ],
};
