import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SearchWat from "../components/SreachBox/SreachWat"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <div> this content </div>
    <div> this content </div>
    <div> this content </div>
    <div> this content </div>
          <SearchWat/>
    </div>
  </Layout>
)

export default IndexPage
