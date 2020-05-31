module.exports = options => ({
  plugins: [
    {
    resolve: `gatsby-theme-apollo-docs`,
    options: {
      navConfig: {
        'SchemaHero Basics': {
          url: 'https://schemahero.io/learn',
          description:
            'Learn about each part of the Apollo platform and how they all work together.',
          omitLandingPage: true
        },
        'Documentation': {
          url: 'https://schemahero.io/docs/',
          description:
            'Configure a production-ready GraphQL server to fetch and combine data from multiple sources.'
        },
        'API Reference': {
          url: 'https://schemmahero.io/docs/reference/api',
          description:
            "Manage the entirety of your React app's state and seamlessly execute GraphQL operations."
        },
        'CLI Reference': {
          url: 'https://schemahero.io/docs/reference/cli',
          description:
            "Integrate with Apollo's cloud service for schema versioning, metrics, and enhanced security."
        },
        'Databases': {
          url: 'https://schemahero.io/docs/databases',
          description:
            "Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations."
        },
        'Community': {
          url: 'https://schemahero.io/docs/community',
          description:
                'Define a custom chain of actions that your client performs with each GraphQL operation.',
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
        // gaTrackingId: 'UA-74643563-13',
      ...options,
    }
  }]
});
