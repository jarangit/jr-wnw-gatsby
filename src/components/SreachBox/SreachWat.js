import React, { useEffect, useState, Fragment } from 'react'
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
  max-width: 200px;
  display: flex;
  div{
    margin:0;
  }
  #searchbox {
    border-bottom: 2px solid #512825;
  }
`
const SearchSty = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  div{
    align-items: baseline;
    /* margin: 0 10px; */
  }

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
    li{
      padding: 3px;
      list-style: none;
      border-radius: 0.2em;
      :hover{
        background: gray;
      }
    }
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
  const [ValSearch, setValSearch] = useState('')
  const [ValTime, setValTime] = useState('เลือกเวลาจัดส่ง')


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
    if(ValSearch !== '' && ValTime !== 'เลือกเวลาจัดส่ง'){
      window.location.href = `/ร้านพวงหรีด/${ValSearch}`;
    }else{
      alert("no")
    }
  }

  const SelectTime = (e) => {
    setValTime(e)
    setShowTime(false)
  }

  return (
   <SearchSty>
      <SearchBox>
        <div>
            <HomeWork size = '25'color = '#C6AFA9' />
        </div>
        <div>
           <ReactSearchBox
            id = 'searchbox'
            placeholder="เลือกพื้นที่เขต"
            data={DataCounty}
            onSelect = {record => setValSearch(record.value)}
            callback={record => console.log(record)}
            inputBoxFontColor = '#917d78'
            inputBoxHeight = '25px'
            inputBoxBorderColor = 'white'
            dropDownBorderColor = 'white'
            />
        </div>
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
              {ValTime} 
              <TriangleDown size = '15'/> 
            </button>
            <div>
               <ul>
                  <li onClick = {(e) => SelectTime(e.target.textContent)}>16:00 น</li>
                  <li onClick = {(e) => SelectTime(e.target.textContent)}>17:00 น</li>
                  <li onClick = {(e) => SelectTime(e.target.textContent)}>18:00 น</li>
                  <li onClick = {(e) => SelectTime(e.target.textContent)}>19:00 น</li>
              </ul>
            </div>
          </div>
        </ButTime>


        <div>
          <SearchBottom onClick = {GoCounty}> ค้นหาพวงหรีด </SearchBottom>
        </div>
   </SearchSty>
  )
}
export default SearchWat