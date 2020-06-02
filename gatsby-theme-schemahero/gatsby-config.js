module.exports = options => ({
  plugins: [
    {
    resolve: `gatsby-theme-apollo-docs`,
    options: {
      navConfig: {
        'Learn SchemaHero': {
          url: 'https://schemahero.io/learn',
          description:
            'Get started with SchemaHero by learning the core concepts and walk through a complete tutorial.',
          omitLandingPage: true
        },
        'Documentation': {
          url: 'https://schemahero.io/docs',
          description:
            'Ready to dive in? This section contains the SchemaHero documentation for more advanced topics.'
        },
        'API Reference': {
          url: 'https://schemahero.io/reference',
          description:
            "The API Reference contains full specifications for all versions of SchemaHero Kubernetes objects."
        },
        'CLI Reference': {
          url: 'https://schemahero.io/cli',
          description:
            "A reference for the commands in the SchemaHero kubectl plugin."
        },
        'Databases': {
          url: 'https://schemahero.io/databases',
          description:
            "A full look at databases supported by SchemaHero, including the features and capabilities of each."
        },
        'Community': {
          url: 'https://schemahero.io/community',
          description:
                'SchemaHero is a community project. This section contains info about where and how the community works.',
          omitLandingPage: true
        }
      },
      footerNavConfig: {
        Changelog: {
          href: 'https://schemahero.io/docs/changelog',
        },
      },
      algoliaApiKey: 'cc18e896d9ebbcfbef43c3146b9f13ac',
      algoliaIndexName: 'prod_schemahero',
      baseUrl: 'https://schemahero.io',
      twitterHandle: 'schemahero',
      youtubeUrl: 'https://www.youtube.com/channel/UCZ0-IE0eh_A8oeDOnI6PKxg',
      logoLink: 'https://schemahero.io',
      gaTrackingId: 'UA-61420213-10',
      ...options,
    }
  }]
});
