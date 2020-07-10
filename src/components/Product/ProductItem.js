import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"


const DivLinkCheckOut = styled.div`
    display: flex;
    text-align: center;
    div{
        bottom: 0;
        padding: 10px;
    }
    #cart{
        background: #C6AFA9;
        width: 50%;
        a{
            color: white;
        }
        :hover{
            background: #d6beb8;
        }
    }
    #checkOut{
        background: #512825;
        width: 50%;
        a{
            color: white;
        }
        :hover{
            background: #60302c;
        }
    }
`
const ProItemSty = styled.div`
    width: 280px;
    background: #F1ECE9;
    margin: 10px;
    border-radius: 0.5em;
    img{
        background: #F1ECE9;
        width: 100%;
    }
    h2,h3{
        text-align: center;
    }
    #noProduct{
        a{
            color: red;
        }
    }
    #imagePrice{
        padding: 10px;
    }
`
const ProductItem = (props) => {
    const {id, name, sku, slug, price, image} = props.data
    const CheckPrice = () =>{
        if(price === null){
            return (
                <h3 id = 'noProduct'> <Link to = "/about-us">กรุณาติดต่อทีมงาน</Link> </h3>
            )
        }else{
            return (
                <h3> {price} </h3>
            )
        }
    }
    return(
        <ProItemSty testProps = "red">
            <div id = "imagePrice">
                <img src = {image.mediaItemUrl}  alt = {image.altText}/>
                <h3> <Link to = {'/พวงหรีด/' + slug}> {name} </Link> </h3>
                {CheckPrice()}
            </div>
                <DivLinkCheckOut>
                    <div id = "cart">
                        <Link to = ''>เพิ่มลงตะกร้า</Link>
                    </div>
                    <div id = "checkOut">
                        <Link to = '' >ซื้อ</Link>
                    </div>
                </DivLinkCheckOut>
        </ProItemSty>
    )
}

export default ProductItem