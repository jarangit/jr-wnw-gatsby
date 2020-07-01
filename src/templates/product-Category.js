import React from 'react'
import ShowProduct from '../components/Product/ShowProduct'

const ProductCatTemplate = (data) => {
    const {id, name, slug, products, description} = data.pageContext
   console.log(slug)
    return(
        <div>
            <div>
                <h1> {name} </h1>
                <div dangerouslySetInnerHTML={{__html: description}}/>
            </div>
            <div>
                <h2> PRODUCT </h2>
                <ShowProduct productsData = {products}/>                
            </div>
        </div>
    )
}

export default ProductCatTemplate