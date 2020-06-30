const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
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
          pages (first: 100){
            nodes {
              id
              slug
              title
              content
            }
          }
        }
        wordPress {
          posts (first: 100){
            nodes {
              id
              title
              slug
              uri
              content
            }
          }
        }
        wordPress {
          productCategories(first: 100) {
            nodes {
              id
              name
              slug
              description
              products {
                nodes {
                  ... on WordPress_SimpleProduct {
                    id
                    name
                    price
                    slug
                    sku
                    image {
                      mediaItemUrl
                    }
                  }
                }
              }
              }
            }
          }
          wordPress {
            products(first: 1000) {
              nodes {
                ... on WordPress_SimpleProduct {
                  id
                  name
                  shortDescription
                  date
                  price
                  salePrice
                  sku
                  slug
                  status
                  image {
                    altText
                    mediaItemUrl
                  }
                }
                ... on WordPress_VariableProduct {
                  id
                  name
                  shortDescription
                  date
                  price
                  salePrice
                  sku
                  slug
                  status
                  image {
                    altText
                    mediaItemUrl
                  }
                }
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

          //post
          const PostTemplate = path.resolve(`src/templates/post.js`)
          result.data.wordPress.posts.nodes.forEach(edge => {
              const deCode = decodeURI(edge.slug);
              // cat.slug +'/'+
              createPage({
                path: deCode,
                component: PostTemplate,
                context: edge,
              })
            })


             //ProductCategory
          const ProductCatTemplate = path.resolve(`src/templates/product-Category.js`)
          result.data.wordPress.productCategories.nodes.forEach(edge => {

            const deCodeMain = decodeURI(edge.slug);
            createPage({
              path: '/ร้านพวงหรีด/'+deCodeMain,
              component: ProductCatTemplate,
              context: edge,
            })
          })

           // SingleProduct
           const ProductSingleTemplate = path.resolve(`src/templates/product-Single.js`)
           result.data.wordPress.products.nodes.forEach(edge => {
            const deCode = decodeURI("/พวงหรีด/"+ edge.slug);
            createPage({
              path: deCode,
              component: ProductSingleTemplate,
              context: edge,
            })
           })
}