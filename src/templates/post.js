import React from 'react'
import Layout from '../components/Layout/layout'

const PostTemplate  = (data) => {
    // console.log(data)
    const {title, slug, id, content} = data.pageContext
    return(
        <Layout>
            this post
            <div dangerouslySetInnerHTML={{__html: title}}/>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </Layout>
    )
}
export default PostTemplate 