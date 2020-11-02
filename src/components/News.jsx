import React from 'react'
import style from './css/news.module.css';

function news({title,source,description,image,link}) {
    return (
        <div >
            {/* <h1 className={style.title}>{title}</h1>
            <p className={style.date}> Published On: {source.slice(0,10)}</p>
            <img src={image} alt="image" className={style.image}/>
            <p className={style.content} >{description}</p>
            <p><a href={link} target="_blank" >read more</a> </p> */}
            <div className={style.news}>
            <img src={image} alt="image" className={style.image}/>
            <div>
            <h1 className={style.title}>{title}</h1>
            <p className={style.date}> Published On: {source.slice(0,10)}</p>
            <p className={style.content} >{description}</p>
            <p><a href={link} target="_blank" >read more</a> </p>
            </div>
            </div>
        </div>

        
    )
}

export default news
