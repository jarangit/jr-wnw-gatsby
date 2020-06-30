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
// export const query = graphql`
//  ($id: ID!) {
//     wordPress {
//       productCategory(id: $id) {
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