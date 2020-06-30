import React from 'react'

const ProductCatTemplate = (data) => {
    const {id, name, slug, products, description} = data.pageContext
    return(
        <div>
            <div>
                <h1> {name} </h1>
                <div dangerouslySetInnerHTML={{__html: description}}/>
            </div>
            <div>
                <h2> PRODUCT </h2>
                {products.nodes.map(items => (
                    <div> 
                        {/* <img src = {items.image.mediaItemUrl} /> */}
                        <strong> {items.name}  </strong>
                    </div>
                   
                ))}
            </div>
        </div>
    )
}

export default ProductCatTemplate