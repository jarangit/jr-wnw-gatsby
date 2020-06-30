import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'

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
                    //  console.log(checkUrl())
                        return(
                            <div>
                                <ul>
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
                                </ul>
                            </div>
                        )
                    })}
                </div>
            )
        }}
    />
)


export default Menu