import React from 'react'

import { useStaticQuery, graphql } from "gatsby"

const ShowProduct = () => {
    const data = useStaticQuery(graphql`
      {
        wordPress {
          productCategory(id: $id) {
            products(first: 500) {
              nodes {
                ... on WordPress_SimpleProduct {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `,
    {
        "id": "dGVybToxMDU1"
      })
    return <pre>{JSON.stringify(data, null, 4)}</pre>
  }
export default ShowProduct