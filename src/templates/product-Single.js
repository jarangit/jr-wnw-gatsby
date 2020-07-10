import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'


const BlockProduct = styled.div`
    display: flex;
    margin: 50px 0;
    justify-content: space-around;
    padding: 50px;
    background: #f1ece9;
    #detail{
        padding: 20px;
    }
`
const ButCheckOut = styled.div`
    display: flex;
    div{
        text-align: center;
        width: 50%;
        padding: 15px;
        background: #512825;
        margin: 10px;
        border-radius: 0.3em;
        a{
            color: white;
        }
    }
`
const ProductSingleTemplate = (data) => {
    console.log(data)
    const {id, name, slug, sku, image, price, shortDescription} = data.pageContext
    return(
        <Layout>
            <h1> {name} </h1>
           <BlockProduct>
            <img src = {image.mediaItemUrl} alt = {image.altText} />
            <div id = "detail">
                <h1>{name}</h1>
                <h3>{price}</h3>
                <ButCheckOut>
                    <div> <Link> เพิ่มลงตะกร้า </Link> </div>
                    <div> <Link> ซื้อสินค้า </Link> </div>
                </ButCheckOut>
                <h4>รายละเอียดสินค้า</h4>
                <h4> size </h4>
                <div dangerouslySetInnerHTML={{__html: shortDescription}}/>
            </div>
           </BlockProduct>
        </Layout>
    )
} 
export default ProductSingleTemplate 