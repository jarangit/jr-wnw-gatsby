import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'



const MenuItem = styled.div`
    display: flex;
`
const MenuLogo = styled.div`
    text-align: center;    
    background: black;
    color: #C6AFA9;
    padding: 20px;
`
const MenuSty = styled.div`
    background: #C6AFA9;
    width: 100%;
    justify-content: space-around;
    div{
        margin: 0 auto;
    }

`
const UlMain = styled.ul`
    margin: 0 auto;
    width: 100%;
    padding: 20px;
    li {
        display: inline;
        padding: 0 10px ;
        a{
            color: black;
            text-decoration:none;
        }
        li{
            display:none;
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
                    <Link to = "/" > LOGO </Link>
                    </MenuLogo>
                    <MenuItem>
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
                        <div>
                                <div>icon1</div>
                                <div>icon2</div>
                        </div>
                    </MenuItem>
                </MenuSty>
            )
        }}
    />
)


export default Menu