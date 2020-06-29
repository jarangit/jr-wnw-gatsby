import React from 'react'

const ProductCatTemplate = (data) => {
    console.log(data)
    const {id, name, slug, products, description} = data.pageContext
    return(
        <div>
            <div>
                <h1> {name} </h1>
                <div dangerouslySetInnerHTML={{__html: description}}/>
            </div>
            <div>
                {products.nodes.map(items => (
                    <div> {items.name} </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCatTemplate