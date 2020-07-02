import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'



const UlMain = styled.ul`
    display:flex;
    flex-wrap:wrap;
    float:right;
    li{
        :hover{
            ul {
                display: block;
            }
        }
        ul{
            text-decoration:none;
            display:none;
            position: absolute;
            z-index: 1;
            li a{
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }
        }
    }
`
// console.log(process.env.GATSBY_API_URL)
const MENU_QUERY = graphql`
 {
  wordPress {
  menu(id: "TWVudTo2MQ==") {
    slug
    name
    id
    menuItems {
      nodes {
        label
        id
        url
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

const Menu = () => (
    <StaticQuery
        query = {MENU_QUERY}
        render={data => {
            // console.log(data)
            
            return(
                <div>
                    {data.wordPress.menu.menuItems.nodes.map(item => {
                     const checkUrl = () =>{
                        const wpUrl = 'https://api-jr-wnw.dev-app-bit.com'
                        if( item.url != null ){
                            return decodeURI( item.url.replace(wpUrl,``))
                        }else{
                            return '/'
                        }
                     }
                        return(
                            <div>
                                <UlMain>
                                    <li>
                                        <Link key = {item.id} to = {checkUrl()} > {item.label} </Link>
                                        {item.childItems.nodes.map(child => {
                                            const checkUrlChild = () =>{
                                                const wpUrlChild = 'https://api-jr-wnw.dev-app-bit.com'
                                                if( child.url != null ){
                                                    return decodeURI( child.url.replace(wpUrlChild,``))
                                                }else{
                                                    return '/'
                                                }
                                             }
                                            // console.log(child)
                                            return(
                                                <ul>
                                                    <li>
                                                        <Link key = {child.id} to = {checkUrlChild()} > {child.label} </Link>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </li>
                                </UlMain>
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)


export default Menu