import React from 'react'

import { graphql } from "gatsby"

const ShowProduct = ({ data }) => {
    // console.log(data)
    return(
        <div>
            this product
        </div>
    )
}

// const ID = 'dGVybToxMDMx'
// export const query = graphql`
//   {
//     wordPress {
//       productCategory(id: ID) {
//         products(first: 500) {
//           nodes {
//             ... on WordPress_SimpleProduct {
//               id
//               name
//             }
//           }
//         }
//       }
//     }
//   }
  
// `

export default ShowProduct