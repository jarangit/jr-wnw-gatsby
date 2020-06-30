import React from 'react'

const PageTemplate  = (data) => {
    // console.log(data)
    const {title, slug, id, content} = data.pageContext
    return(
        <div>
            <div dangerouslySetInnerHTML={{__html: title}}/>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}
export default PageTemplate 