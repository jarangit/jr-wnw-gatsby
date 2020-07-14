
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Menu from './Menu'
import Footer from "./Footer"
import { createGlobalStyle } from 'styled-components'




const GlobalStyle = createGlobalStyle`
  .jr-navigation-product-single{
    padding: 20px 0;
    border: 1px solid #e2e2e2;
    color: #C6AFA9;
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <GlobalStyle/>
    <Menu/>
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
