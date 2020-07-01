import React from 'react'

<<<<<<< HEAD
import { useStaticQuery, graphql } from "gatsby"
=======
import { StaticQuery,useStaticQuery, graphql, Link } from "gatsby"


const ShowProduct = (props) => {
  console.log(props.productsData)
  
 return(
   <div>
     {props.productsData.nodes.map( items => {
       const {id, slug, name, image, price} = items
       const ShowImg = () => {
        if(Object.entries(items).length === 0){
          return 
        }else{
          return(
            <div>
              <Link to = {'/พวงหรีด/' + slug}> {name} </Link>
              <img src = {image.mediaItemUrl} alt = {items.image.altText} />
            </div>
          )
        }
      }
      //  console.log(items.image.altText)
       return(
         <div>
            {ShowImg()}
         </div>
       )
     })}
   </div>
 )
}
>>>>>>> 6275c439b11b0d782c4b0b54247a2f701914f2bf

const ShowProduct = () => {
    const data = useStaticQuery(graphql`
      {
        wordPress {
          productCategory(id: $id) {
            products(first: 500) {
              nodes {
                ... on WordPress_SimpleProduct {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `,
    {
        "id": "dGVybToxMDU1"
      })
    return <pre>{JSON.stringify(data, null, 4)}</pre>
  }
export default ShowProduct