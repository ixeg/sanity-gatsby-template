export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e1ddfa20b5dc1ed4908385',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-template-studio-87h9j1ed',
                  apiId: '3945bd20-d644-48bb-811a-ab1f01d421ad'
                },
                {
                  buildHookId: '61e1ddfac5b5661fa37d3f37',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-template-web-qz9n1xf6',
                  apiId: '090cbd05-f434-4b31-a191-d948cc4addce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ixeg/sanity-gatsby-template',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-template-web-qz9n1xf6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
