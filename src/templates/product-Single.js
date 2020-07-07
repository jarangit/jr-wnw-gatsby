import React from 'react'
import Layout from '../components/Layout/layout'

const ProductSingleTemplate = (data) => {
    console.log(data)
    const {id, name, slug, sku, image, price, shortDescription} = data.pageContext
    return(
        <Layout>
            <img src = {image.mediaItemUrl} alt = {image.altText} />
            <div>{name}</div>
            <div>{price}</div>
            <div dangerouslySetInnerHTML={{__html: shortDescription}}/>
        </Layout>
    )
} 
export default ProductSingleTemplate 