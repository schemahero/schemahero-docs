const themeOptions = {
  siteName: 'SchemaHero Docs',
  pageTitle: 'SchemaHero Docs',
  menuTitle: 'SchemaHero',
  baseDir: 'docs',
  contentDir: 'source',
};

module.exports = {
  pathPrefix: '/docs',
  plugins: [
    {
      resolve: '../gatsby-theme-schemahero',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'SchemaHero Documentation',
        description: 'The Official SchemaHero Documentation',
        githubRepo: 'schemahero/schemahero-docs',
        sidebarCategories: {
          null: ['index'],
          Installing: [
            'installing/kubectl',
            'installing/uninstall',
            'installing/image-tags',
          ],
          'Connecting Databases': [
            'connecting-databases/creating-db-resource',
            'connecting-databases/connection-uri',
            'connecting-databases/using-secrets',
            'connecting-databases/hashicorp-vault',
            'connecting-databases/amazon-ssm',
            'connecting-databases/using-params',
            'connecting-databases/amazon-rds',
            'connecting-databases/google-cloud-sql',
          ],
          'Managing Tables': [
            'managing-tables/creating-tables',
            'managing-tables/deleting-tables',
            'managing-tables/adding-columns',
            'managing-tables/modifying-columns',
            'managing-tables/dropping-columns',
            'managing-tables/primary-keys',
            'managing-tables/foreign-keys',
            'managing-tables/indexes',
            'managing-tables/attributes',
            'managing-tables/editing-constraints',
          ],
          'Managing Types': [
            'managing-types/creating-types',
          ],
          Advanced: [
            'advanced/enforcing-policies',
            'advanced/fixture-generation',
            'advanced/operatorless-mode',
            'advanced/migrating',
          ],
        },
      },
    },
  ],
};
