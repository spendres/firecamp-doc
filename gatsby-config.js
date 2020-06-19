const themeOptions = require('gatsby-theme-apollo-docs/theme-options')

// console.log(themeOptions, `${__dirname}/src/pages`)
module.exports = {
    siteMetadata: {
        siteName: "", //"Firecamp document",
        title: 'Firecamp documentation',
        description: 'VS code for API things',
        author: '@Nishchit14',
    },
    pathPrefix: '/',
    plugins: [
      {
        resolve: 'gatsby-theme-apollo-docs',
        options: {
          ...themeOptions,
          root: __dirname,
          // subtitle: 'Campsite for API things.',
          description: 'A guide to using Firecamp',
          githubRepo: 'firecampapp/firecamp-doc',
          // defaultVersion: '1',
          // versions: {
          //   '1': 'version-1'
          // },
          siteName: 'Firecamp Docs',
          pageTitle: 'Firecamp Docs',
          menuTitle: 'Firecamp Platform',
          segmentApiKey: '',
          algoliaApiKey: '',
          algoliaIndexName: '',
          baseUrl: 'https://doc.firecamp.io',
          twitterHandle: 'FirecampHQ',
          spectrumHandle: '',
          youtubeUrl: 'https://www.youtube.com/channel/UC7lDNSOMvPOMt3ylaNLLIdA',
          logoLink: 'https://doc.firecamp.io',
          baseDir: '/',
          contentDir: 'source',
          navConfig: {
            // 'Firecamp Basics': {
            //   url: 'http://localhost:8000/',
            //   description: 'Learn about each part of the Apollo platform and how they all work together.',
            //   omitLandingPage: true
            // },
            // 'Firecamp GraphQL': {
            //   url: 'https://www.apollographql.com/docs/apollo-server',
            //   description: 'Configure a production-ready GraphQL server to fetch and combine data from multiple sources.'
            // },
            // 'Firecamp WebSocket': {
            //   url: 'https://www.apollographql.com/docs/react',
            //   description: "Manage the entirety of your React app's state and seamlessly execute GraphQL operations."
            // },
            // 'Apollo Graph Manager': {
            //   url: 'https://www.apollographql.com/docs/graph-manager',
            //   description: "Integrate with Apollo's cloud service for schema versioning, metrics, and enhanced security."
            // },
            // 'Firecamp API Client': {
            //   url: 'https://www.apollographql.com/docs/ios',
            //   description: "Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations."
            // },
            // 'Firecamp gRPC': {
            //   url: 'https://www.apollographql.com/docs/link',
            //   description: 'Define a custom chain of actions that your client performs with each GraphQL operation.',
            //   omitLandingPage: true
            // }
          },
          footerNavConfig: {
            Blog: {
              href: 'https://blog.firecamp.io/',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            Contribute: { href: 'https://firecamp.io' },
            'Firecamp Summit': {
              href: 'https://summit.firecamp.io/',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          },
          sidebarCategories: {
            null: [
              'index',
              "discover-firecamp/firecamp-for-teams/organization", 
              "discover-firecamp/firecamp-for-teams/workspaces",
            ],
            "HTTP APIs": [
              'apis/a/sending-your-first-request',
              'apis/a/observing-the-response-panel',
              'apis/a/saving-your-requests',
              'apis/a/generating-code-snippets',
              'apis/a/writing-graphql-queries',
              'apis/a/running-graphql-query',

              'apis/i/url-bar',
              'apis/i/request-panel',
              'apis/i/request-body',
              'apis/i/authentications',
              'apis/i/headers',
              'apis/i/query-parameters',
              'apis/i/response-panel',
              'apis/i/code-generator-for-requests',
            ],

            GraphQL: [
              'graphql/i/url-bar',
              'graphql/i/request-methods',
              'graphql/i/playground',
              'graphql/i/collections',
              'graphql/i/explorer',
              'graphql/i/request-panel',
              'graphql/i/response-panel',

              'graphql/a/run-your-first-graphql-query',
              'graphql/a/reviewing-the-response-panel',
              'graphql/a/create-you-query-collection',
              'graphql/a/saving-graphql-request',
              'graphql/a/using-variable-within-a-query',
              'graphql/a/uploading-file-within-graphql-request'           
             ],

            WebSocket: [
              "websocket/a/establishing-your-first-websocket-connection",
              "websocket/a/communicating-with-the-server-through-messages",
              "websocket/a/saving-and-managing-messages",

              "websocket/i/url-bar",
              "websocket/i/message-panel",
              "websocket/i/chatboard-panel",
              "websocket/i/message-collection-panel",
              "websocket/i/code-snippets-for-websockets",
            ],

            SocketIO : [
              
            ],


            "Discover Firecamp": [
              
            ]

          }
        }
      }
    ],
  }
