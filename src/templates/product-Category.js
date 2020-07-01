import React from 'react'
import ShowProduct from '../components/Product/ShowProduct'

const ProductCatTemplate = (data) => {
    const {id, name, slug, products, description} = data.pageContext
<<<<<<< HEAD
    console.log(id)
=======
   console.log(slug)
>>>>>>> 6275c439b11b0d782c4b0b54247a2f701914f2bf
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