import React from 'react'
import style from './css/news.module.css';

function news({title,source,description,image,link}) {
    return (
        <div className={style.news}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.date}>{source.slice(0,10)}</p>
            <img src={image} alt="news" className={style.image}/>
            <p className={style.content} >{description}</p>
            <p><a href={link} >read more</a> </p>
        </div>
    
        
    )
}

export default news
