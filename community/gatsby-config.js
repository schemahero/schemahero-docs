const themeOptions = {
  siteName: 'SchemaHero Community',
  pageTitle: 'SchemaHero Community',
  menuTitle: 'SchemaHero',
  baseDir: 'community',
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
        subtitle: 'SchemaHero Community',
        description: 'SchemaHero Community',
        githubRepo: 'schemahero/schemahero',
        sidebarCategories: {
          null: ['index'],
          'Community Meetings': [
            'meetings/2020-06-01',
          ],
        },
      },
    },
  ],
};
