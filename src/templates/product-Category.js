import React from 'react'
import ShowProduct from '../components/Product/ShowProduct'
import Layout from '../components/Layout/layout'

const ProductCatTemplate = (data) => {
    const {id, name, slug, products, description} = data.pageContext
    return(
        <Layout>
            <div>
                <h1> {name} </h1>
                <div dangerouslySetInnerHTML={{__html: description}}/>
            </div>
            <div>
                <h2> PRODUCT </h2>
                <ShowProduct productsData = {products}/>                
            </div>
        </Layout>
    )
}

export default ProductCatTemplate