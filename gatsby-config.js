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
              'apis/actions/sending-your-first-request',
              'apis/actions/observing-the-response-panel',
              'apis/actions/saving-your-requests',
              'apis/actions/generating-code-snippets',
              'apis/actions/writing-graphql-queries',
              'apis/actions/running-graphql-query',

              'apis/impressions/url-bar',
              'apis/impressions/request-panel',
              'apis/impressions/request-body',
              'apis/impressions/authentications',
              'apis/impressions/headers',
              'apis/impressions/query-parameters',
              'apis/impressions/response-panel',
              'apis/impressions/code-generator-for-requests',
            ],

            GraphQL: [
              'graphql/impressions/url-bar',
              'graphql/impressions/request-methods',
              'graphql/impressions/playground',
              'graphql/impressions/collections',
              'graphql/impressions/explorer',
              'graphql/impressions/request-panel',
              'graphql/impressions/response-panel',

              'graphql/actions/run-your-first-graphql-query',
              'graphql/actions/reviewing-the-response-panel',
              'graphql/actions/create-you-query-collection',
              'graphql/actions/saving-graphql-request',
              'graphql/actions/using-variable-within-a-query',
              'graphql/actions/uploading-file-within-graphql-request'           
             ],

            WebSocket: [
              "websocket/actions/establishing-your-first-websocket-connection",
              "websocket/actions/communicating-with-the-server-through-messages",
              "websocket/actions/saving-and-managing-messages",

              "websocket/impressions/url-bar",
              "websocket/impressions/message-panel",
              "websocket/impressions/chatboard-panel",
              "websocket/impressions/message-collection-panel",
              "websocket/impressions/code-snippets-for-websockets",
            ],

            SocketIO : [
              "socket.io/actions/connecting-and-configuring-a-socket-end-point",
              "socket.io/actions/adding-listeners",
              "socket.io/actions/setting-up-an-emitter",
              "socket.io/actions/preparing-emitter-collection",
              "socket.io/actions/saving-your-socketio-requests",
              "socket.io/actions/generating-code-snippet",


              "socket.io/impressions/chatboard-panel",
              "socket.io/impressions/code-snippets-for-socketio",
              "socket.io/impressions/message-collection-panel",
              "socket.io/impressions/message-panel",
              

              
            ],


            "Discover Firecamp": [
              
            ]

          }
        }
      }
    ],
  }
