const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
//   createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, inPermanent: true })

    const result =  await graphql(`
    {
        wordPress {
          pages(first: 100) {
            nodes {
              id
              slug
              title
            }
          }
        }
      }
       
      `)
      if (result.errors) {
        throw new Error(result.errors)
      }
        //page
        const PageTemplate = path.resolve(`src/templates/page.js`)
        result.data.wordPress.pages.nodes.forEach(edge => {
          const deCode = decodeURI(edge.slug);
          createPage({
            path: deCode,
            component: PageTemplate,
            context: edge,
          })
        })
}