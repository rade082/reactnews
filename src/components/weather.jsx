import React from 'react'
import style2 from './css/weather.module.css';

function weather({location , current}) {
    return (
        <aside >
            <div className={style2.weather}>
             <form>
               <input placeholder="Location:"></input>
               <button>Search</button>
             </form>   
             <h1>Location:{location}</h1>
             <h1>Current Temperature:{current} </h1>
            </div>
        </aside>
        
    )
}

export default weather
