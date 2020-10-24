import React from 'react'

function news({title,source,description,image,link}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{source.slice(0,10)}</p>
            <img src={image} alt="news"/>
            <p>{description}</p>
            <p><a href={link} >read more</a> </p>
        </div>
    )
}

export default news
