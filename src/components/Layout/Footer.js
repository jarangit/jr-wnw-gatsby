import React from "react"
import styled from 'styled-components'
import { graphql, StaticQuery, Link } from 'gatsby'

const Logo = styled.img`
    width: 150px;
`
const FooterSty = styled.div`
    background-color: black;
    color: #C6AFA9;
    text-align: center;
    hr{
        max-width: 100%;
        margin: 0 auto;
        border-top: 0.1px solid #C6AFA9;
        margin: 0px;
    }
`
const BoxImgItems = styled.div`
    border: 1px solid #C6AFA9;
    border-style: none solid none none;
    width: 100px;
    padding: 0px;
    height: 100px;
    padding: 0 20px;
    img{
        /* margin: 0; */
        width: 100%;
    }
`
const BoxImgPay = styled.div`
    display: flex;
    margin: 30px 20px;
    justify-content: center;
`
const FooterMenu = styled.div`
    /* height: 100px; */
    /* width: 200px; */
    text-align: left;
    ul{
        flex-direction: column;
        li{
            width: 500px;
            padding: 5px;
            display: inline-block;
            list-style:none;
        }
    }
`


const MENU_QUERY = graphql`
 {
  wordPress {
  menu(id: "TWVudTo2MQ==") {
    slug
    name
    id
    menuItems (first: 100){
      nodes {
        label
        id
        url
        parentDatabaseId
        childItems {
            nodes {
              label
              id
              url
            }
          }
      }
    }
  }
}
}

`
const Footer = () => (
    <StaticQuery
        query = {MENU_QUERY}
        render={data => {
            console.log(data)
            return(
                <FooterSty >

                    <div>
                        <Link to = "/" >
                            <Logo src ="https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2020/07/Wreathnawat_Logo-Horizontal-White.png" />
                        </Link>
                    </div>


                    <FooterMenu className = "container">
                    <hr/>
                        <ul>
                            {data.wordPress.menu.menuItems.nodes.map(item => {
                            const checkUrl = () =>{
                                const wpUrl = 'https://api-jr-wnw.dev-app-bit.com'
                                if( item.url != null ){
                                    return decodeURI( item.url.replace(wpUrl,``))
                                }else{
                                    return '/'
                                }
                            }
                            if(item.parentDatabaseId === 0){
                                return(
                                            <li>
                                                <Link key = {item.id} to = {checkUrl()} > {item.label} </Link>
                                            </li>
                                )
                            }else{
                                return ''
                            }
                        })}
                        </ul>
                    </FooterMenu>
                    


                   {/* <BoxImgPay>
                   <BoxImgItems>
                        <img src = "https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2016/11/citibank.jpg" />
                    </BoxImgItems>
                   <BoxImgItems>
                        <img src = "https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2016/11/citibank.jpg" />
                    </BoxImgItems>
                   <BoxImgItems>
                        <img src = "https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2016/11/citibank.jpg" />
                    </BoxImgItems>
                   <BoxImgItems>
                        <img src = "https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2016/11/citibank.jpg" />
                    </BoxImgItems>
                   <BoxImgItems>
                        <img src = "https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2016/11/citibank.jpg" />
                    </BoxImgItems>
                   <BoxImgItems>
                        <img src = "https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2016/11/citibank.jpg" />
                    </BoxImgItems>
                   </BoxImgPay> */}


                <div>
                    copyright 2014 - 2018 ร้านพวงหรีด "หรีด ณ วัด" | Privacy Policy By App-Bit Studio - Digital Marketing Agency
                </div>

                </FooterSty>
            )
        }}
    />
)
export default Footer