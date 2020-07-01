import React from 'react'

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

export default ShowProduct