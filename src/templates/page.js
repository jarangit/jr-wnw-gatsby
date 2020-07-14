import React from 'react'
import Layout from '../components/Layout/layout'

const PageTemplate  = (data) => {
    // console.log(data)
    const {title, slug, id, content} = data.pageContext
    return(
        <Layout>
            <div className = "container">
                <div dangerouslySetInnerHTML={{__html: title}}/>
                <div dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </Layout>
    )
}
export default PageTemplate 