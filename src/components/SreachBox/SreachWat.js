import React, { useEffect, useState } from 'react'
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
  const [DataCounty, setDataCounty] = useState()


  useEffect(() => {
    const setArr = [{key: '', value: '',}]
    const MapData = async () => {
      data.wordPress.productCategories.nodes.map(County => {
        setArr.push({key: County.name, value: County.name,})
      })
      await setDataCounty(setArr)
    }
    MapData()
  },[])

  const GoCounty = (e) => {
    window.location.href = `/ร้านพวงหรีด/${e}`;
  }
  console.log(DataCounty)
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
      <div>
      <ReactSearchBox
        placeholder="เลือกพื้นที่เขต"
        data={DataCounty}
        onSelect = {record => GoCounty(record.value)}
        callback={record => console.log(record)}
      />
      </div>
    </div>
  )
}
export default SearchWat