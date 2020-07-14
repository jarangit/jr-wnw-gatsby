import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavSty = styled.div`
    padding: 20px 0;
    border: 1px solid #e2e2e2;
    color: #C6AFA9;
`
const JrNavigation = (props) => {
    if(!props.slug){
        return(
            <NavSty className = "jr-navigation-product-single">
                <p className = 'container' >
                    <Link to = "#" > หน้าหลัก </Link>
                    >
                    <Link to = "#"> ร้านพวงหรีด</Link>
                </p>
            </NavSty>
        )
    }else{
        return(
            <NavSty className = "jr-navigation-product-single">
                    <p className = 'container' >
                        <Link to = "#" > หน้าหลัก </Link>
                        >
                        <Link to = "#"> ร้านพวงหรีด </Link>
                        >
                        <Link to = "#"> {props.slug} </Link>
                    </p>
            </NavSty>
        )     
    }
}
export default JrNavigation