import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SearchWat from "../components/HomePage/SreachWat"
import ProductHome from "../components/HomePage/Product/ProductHome"
import styled from 'styled-components'
import { Helmet } from "react-helmet"

const TextTitle = styled.div`
  text-align: center;
  h3, p {
    color: #512825;
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <Helmet>
    <meta name="robots" content="noindex,nofollow" />
        </Helmet>
    <div className="container">
      <TextTitle>
        <h1>“พวงหรีด”</h1>
        <h3>สัญลักษณ์แห่งการอาลัยครั้งสุดท้าย</h3>
        <p>จัดส่งกรุงเทพ ฟรี ค่าจัดส่ง 300 บาท</p>
      </TextTitle>
      <SearchWat/>
      <ProductHome/>
      <img src = 'https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2020/07/freesnippingtool.com_capture_25630710160309.png' width = '1200'/>
      <div>
        <h1>วิธีการสั่งซื้อ</h1>
        <img src = 'https://api-jr-wnw.dev-app-bit.com/wp-content/uploads/2020/07/freesnippingtool.com_capture_25630710161009.png' width = '1200'/>
      </div>
      <div>
        <h1>รีวิวจากลูกค้า</h1>
        <h1> NO DATA </h1>
      </div>
      <div>
        <h1>ลูกค้าที่ไว้วางใจ</h1>
        <h1> NO DATA </h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
