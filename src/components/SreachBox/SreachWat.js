import React, { Component, useState } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactSearchBox from 'react-search-box'
import styled from 'styled-components'

const CatLink = styled.div`
  display: ${props => {
    if(props.Clicky === false){
      return 'none'
    }else{
      return 'block'
    }
  }} ;
  a{
    color:red;
  }
`

const SearchWat = () => {
  const data = useStaticQuery(graphql`
    {
      wordPress {
        productCategories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  `)
  const [DropDown, setDrop] = useState(false)
  console.log(DropDown)
  return (
    <div>
      <button onClick = {() => { setDrop(!DropDown) }} > เลือกเขต </button>
      {data.wordPress.productCategories.nodes.map(items => {
        if(items.slug === 'uncategorized'){
          return''
        }else{
          return(
            <CatLink Clicky = {DropDown} >
              <Link to = {'ร้านพวงหรีด/' + items.slug} key ={items.id} > {items.name} </Link>
            </CatLink>
          )
        }
      })}
    </div>
  )
}
export default SearchWat