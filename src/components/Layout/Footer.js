import React from "react"
import styled from 'styled-components'
import { graphql, StaticQuery, Link } from 'gatsby'



const FooterSty = styled.div`
    background-color: black;
    color: #C6AFA9;
    text-align: center;
    hr{
        border-top: 1px solid #C6AFA9;
    }
`
const BoxImgItems = styled.div`
    border: 1px solid #C6AFA9;
    border-style: none solid none none;
    width: 100px;
    padding: 0px;
    height: 58px;
    padding: 0 20px;
    img{
        margin: 0;
        width: 100%;
    }
`
const BoxImgPay = styled.div`
    display: flex;
    margin: 0 20px;
    justify-content: center;
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
                <FooterSty>

                    <div>
                        <Link to = "/" > LOGO </Link>
                    </div>

                    <hr/>

                    <div>
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
                    </div>
                    


                   <BoxImgPay>
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
                   </BoxImgPay>


                    <p>copyright 2014 - 2018 ร้านพวงหรีด "หรีด ณ วัด" | Privacy Policy By App-Bit Studio - Digital Marketing Agency</p>


                </FooterSty>
            )
        }}
    />
)
export default Footer