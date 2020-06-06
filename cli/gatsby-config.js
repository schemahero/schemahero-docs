const themeOptions = {
  siteName: 'SchemaHero CLI',
  pageTitle: 'SchemaHero CLI',
  menuTitle: 'SchemaHero',
  baseDir: 'cli',
  contentDir: 'source',
};

module.exports = {
  pathPrefix: '/cli',
  plugins: [
    {
      resolve: '../gatsby-theme-schemahero',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'SchemaHero CLI',
        description: 'SchemaHero CLI',
        githubRepo: 'schemahero/schemahero-docs',
        sidebarCategories: {
          null: [
           'kubectl/install',
           'kubectl/get-tables',
           'kubectl/get-migrations',
           'kubectl/describe-migration',
           'kubectl/approve-migration',
           'kubectl/reject-migration',
           'kubectl/shell',
          ],
        },
      },
    },
  ],
};
