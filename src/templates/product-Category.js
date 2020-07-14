import React from 'react'
import ProductItem from '../components/Product/ProductItem'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import JrNavigation from '../components/Nav/navigation'


const BlockProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 25px 0;
`
const ProductCatTemplate = (data) => {
    const {id, name, slug, products, description} = data.pageContext
    console.log(products)
    return(
        <Layout>
            <JrNavigation/>
           <div className = "container" >
            <div>
                    <h1> {name} </h1>
                    <div dangerouslySetInnerHTML={{__html: description}}/>
                </div>
                <div>
                    <h2> PRODUCT </h2>
                    <BlockProduct>
                        {products.nodes.map(items => {
                            if(Object.keys(items).length != 0){
                                return <ProductItem data = {items} />
                            }else{
                                return ''
                            }
                        })}    
                    </BlockProduct>             
                </div>
           </div>
        </Layout>
    )
}

export default ProductCatTemplate