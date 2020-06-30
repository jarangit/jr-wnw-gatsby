import React from 'react'

const ProductSingleTemplate = (data) => {
    const {id, name, slug, sku, image, price, shortDescription} = data.pageContext
    return(
        <div>
            {/* <img src = {image.mediaItemUrl} alt = {image.altText} /> */}
            <div>{name}</div>
            <div>{price}</div>
            <div dangerouslySetInnerHTML={{__html: shortDescription}}/>
        </div>
    )
}

export default ProductSingleTemplate