import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import JrNavigation from '../components/Nav/navigation'


const BlockProduct = styled.div`
    background:#FBFAF9;
    #jr-product{
        display: flex;
        justify-content: space-around;
        padding: 50px;
        #detail{
            padding: 20px;
        }
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
            <div  className = "container">
                <img src = "https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2020/07/Navigater2.png" /> 
            </div>
            <JrNavigation slug = {name} />
            <div className = "container">
                <h1> {name} </h1>
            </div>
            <BlockProduct>
                <div className = "container" id = "jr-product">
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
                </div>
            </BlockProduct>
        </Layout>
    )
} 
export default ProductSingleTemplate 