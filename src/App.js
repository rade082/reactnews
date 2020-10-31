import React,{useState,useEffect} from 'react';
import News from './components/News';
// import Weather from './components/weather';
import './App.css';
// var name;
// var temp;
function App() {
  const [news, setNews] = useState([]);
  // const [temperature , setWeather] = useState([]);
  
  useEffect(() => {
    getNews();
    // getWeather();
  }, [])

  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=5d2a31b1fb53495498bcf392c3cce810`);
    const data = await response.json();
    setNews(data.articles);
  }
 
  
// const getWeather = async () => {
//   const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ad25a412302f4680a8b152056202410&q=kolkata`)
//   const data = await response.json();
  // console.log(data.location.name);
  // console.log(data.current.temp_c);
  // name = data.location.name;
  // temp = data.current.temp_c;
  // console.log(name,temp);
  // setWeather(data);
// }

  return (
    <div className="App">
      <form>
        <input placeholder="Location:" className="serach"></input>
        <button>Search</button>
      </form>
      {news.map(articles =>(
        <News
         className="news"
         key={articles.title}
         title={articles.title}
         source={articles.publishedAt}
         image={articles.urlToImage}
         description={articles.content} 
         link={articles.url} />
      ))}
      {/* {temperature.map(data =>(
        <Weather
        key={data.location.lat}
        location = {name}
        current={data.current.temp_c}
         />
      ))} */}
      {/* <Weather location={name} current={temp} /> */}
    </div>
  );
}

export default App;
