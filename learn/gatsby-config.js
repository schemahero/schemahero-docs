const themeOptions = {
  siteName: 'Learn SchemaHero',
  pageTitle: 'Learn SchemaHero',
  menuTitle: 'SchemaHero',
  baseDir: 'learn',
  contentDir: 'source',
};

module.exports = {
  pathPrefix: '/learn',
  plugins: [
    {
      resolve: '../gatsby-theme-schemahero',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Learn SchemaHero',
        description: 'Learn SchemaHero',
        githubRepo: 'schemahero/schemahero',
        sidebarCategories: {
          null: ['index'],
          Tutorial: [
            'tutorial/introduction',
            'tutorial/install-schemahero',
            'tutorial/connect-database',
            'tutorial/create-table',
            'tutorial/modify-table',
            'tutorial/next-steps',
          ],
        },
      },
    },
  ],
};
