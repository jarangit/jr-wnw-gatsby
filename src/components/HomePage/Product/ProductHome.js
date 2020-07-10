import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductItem from "../../Product/ProductItem"
import styled from 'styled-components'


const BlockProduct = styled.div`
    display: flex;
    margin: 25px 0;
`
const ProductHome = () => {
  const data = useStaticQuery(graphql`
    {
      wordPress {
        products(last: 4) {
          nodes {
            ... on WordPress_SimpleProduct {
              id
              name
              slug
              sku
              price
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
  return (
      <BlockProduct>
          {data.wordPress.products.nodes.map(items => {
              return(
                      <ProductItem data = {items}/>
              )
          })}
      </BlockProduct>
  )
}
export default ProductHome;