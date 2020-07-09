import React, { Fragment } from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { ShoppingCart } from '@styled-icons/zondicons/ShoppingCart'
import { ChatBubbleDots } from '@styled-icons/zondicons/ChatBubbleDots'


const Logo = styled.img`
    width: 150px;
`
const MenuItem = styled.div`
    display: flex;
    justify-content: space-between;

`
const MenuLogo = styled.div`
    text-align: center;    
    background: black;
    color: #C6AFA9;
    /* padding: 20px; */
`
const MenuSty = styled.div`
    background: #C6AFA9;
    width: 100%;
    justify-content: space-around;
    div{
        /* margin: 0 auto; */
    }

`
const UlMain = styled.ul`
    margin: 0 auto;
    width: 100%;
    padding: 20px 0;
    li {
        display: inline;
        padding-right:10px ;
        a{
            color: black;
            text-decoration:none;
        }
        li{
            display:none;
        }
    }

`
const MenuIcon = styled.div`
    ul{
        padding: 0;
        li{
            display: inline;
            margin: 0 5px;
            a{
                color: black;
            }
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

const Menu = () => (
    <StaticQuery
        query = {MENU_QUERY}
        render={data => {
            console.log(data)
            
            return(
                <MenuSty>
                    <MenuLogo>
                    <Link to = "/" >
                        <Logo src ="https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2020/07/Wreathnawat_Logo-Horizontal-White.png" />
                    </Link>
                    </MenuLogo>
                    <MenuItem  className ="container">
                        <div>
                        <UlMain>
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
                                                            <li>
                                                                <Link key = {child.id} to = {checkUrlChild()} > {child.label} </Link>
                                                            </li>
                                                    )
                                                })}
                                            </li>
                                )
                            }else{
                                return ''
                            }
                        })}
                        </UlMain>
                        </div>
                        <MenuIcon>
                            <ul>
                                <li> <Link to = "/"> <ShoppingCart  size="25"/> </Link> </li>
                                <li> | </li>
                                <li> <Link to = "/"> <ChatBubbleDots  size="25"/> </Link> </li>
                            </ul>
                        </MenuIcon>
                    </MenuItem>
                </MenuSty>
            )
        }}
    />
)


export default Menu