import React from 'react'

const PostTemplate  = (data) => {
    console.log(data)
    const {title, slug, id, content} = data.pageContext
    return(
        <div>
            this post
            <div dangerouslySetInnerHTML={{__html: title}}/>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}
export default PostTemplate 