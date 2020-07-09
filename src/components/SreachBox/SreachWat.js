import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactSearchBox from 'react-search-box'
import styled from 'styled-components'
import { HomeWork } from '@styled-icons/material-sharp/HomeWork'
import { Calendar } from '@styled-icons/boxicons-regular/Calendar'
import { Clock } from '@styled-icons/feather/Clock'
import { TriangleDown } from '@styled-icons/entypo/TriangleDown'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ThemeProvider } from "styled-components";




const SearchBox = styled.div`
  max-width: 312px;
  display: flex;
  div{
    margin: 0 10px;
  }
`
const SearchSty = styled.div`
  display: flex;
  justify-content: space-between;

`
const SearchBottom = styled.button`
  background: #512825;
  color:white;
  border: none;
  border-radius: 0.3em;
  padding: 0 70px;
  height: 50px;
  :hover{
    background: #6b332f;
  }
`
const ButTime = styled.div`
  button{
    background: none;
    border: none;
  }
  ul{
    display:${props => {
      if(props.show === false){
        return 'none'
      }else{
        return 'inline-block'
      }
    }};
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
  
  const [dataDate, setDate] = useState(new Date())
  const [DataCounty, setDataCounty] = useState()
  const [ShowTime, setShowTime] = useState(false)


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



  return (
   <SearchSty className = 'container'>
      <SearchBox>
        <HomeWork size = '25' color = '#C6AFA9'/>
        <ReactSearchBox
        placeholder="เลือกพื้นที่เขต"
        data={DataCounty}
        onSelect = {record => GoCounty(record.value)}
        callback={record => console.log(record)}
        inputBoxFontColor = '#917d78'
        // inputBoxBorderColor = 'white'
        />
        </SearchBox>
        <div>
          <Calendar size = '25' color = '#C6AFA9'/>
          <DatePicker
                      selected={dataDate}
                      onChange={(date) => {setDate(date)}}
                  />
        </div>
        <ButTime show = {ShowTime}>
          <div>
          <Clock size = '25' color = '#C6AFA9'/>
          <button onClick = {() => {setShowTime(!ShowTime)}}> 
            เลือกเวลาจัดส่ง <TriangleDown size = '15'/> 
          </button>
          </div>
         <ul>
           <li>jaran</li>
           <li>jaran</li>
           <li>jaran</li>
           <li>jaran</li>
         </ul>
        </ButTime>
        <div>
          <SearchBottom> ค้นหาพวงหรีด </SearchBottom>
        </div>
   </SearchSty>
  )
}
export default SearchWat