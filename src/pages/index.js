import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SearchWat from "../components/SreachBox/SreachWat"
import styled from 'styled-components'

const TextTitle = styled.div`
  text-align: center;
  h3, p {
    color: #512825;
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <TextTitle>
        <h1>“พวงหรีด”</h1>
        <h3>สัญลักษณ์แห่งการอาลัยครั้งสุดท้าย</h3>
        <p>จัดส่งกรุงเทพ ฟรี ค่าจัดส่ง 300 บาท</p>
      </TextTitle>
          <SearchWat/>
    </div>
  </Layout>
)

export default IndexPage
