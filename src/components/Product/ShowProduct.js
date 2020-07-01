import React from 'react'

import { StaticQuery,useStaticQuery, graphql } from "gatsby"


const ShowProduct = (props) => {
  console.log(props.productsData)
  
 return(
   <div>
     {props.productsData.nodes.map( items => {
       const ShowImg = () => {
        if(Object.entries(items).length === 0){
          return 
        }else{
          return(
            <div>
              {items.name}
              <img src = {items.image.mediaItemUrl} alt = {items.image.altText} />
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