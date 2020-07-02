import React, { Component, useState } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactSearchBox from 'react-search-box'



const SearchWat = () => {
  const data = useStaticQuery(graphql`
    {
      wordPress {
        productCategories {
          nodes {
            id
            name
          }
        }
      }
    }
  `)
  console.log(data)
  const DataCat = data.wordPress.productCategories.nodes.map(items => items.id)
  console.log(DataCat)
  var found = DataCat.find(function (element) {
    return element === "dGVybToxMjE3";
  });
  return <pre>{found}</pre>
}
export default SearchWat