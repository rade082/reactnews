import React,{useState,useEffect} from 'react';
import News from './components/News';
// import Weather from './components/weather';
import './App.css';
// var name;
// var temp;
function App() {

  const [news, setNews] = useState([]);
  const [search, setSearch]=useState("")
  const [query,setQuery] = useState('general')

  // const [temperature , setWeather] = useState([]);
  
  useEffect(() => {
    getNews();
    // getWeather();
  }, [query])

  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${query}&apiKey=5d2a31b1fb53495498bcf392c3cce810`);
    const data = await response.json();
    setNews(data.articles);
  }
  

  const updateCategory = e =>{
    setSearch(document.getElementById("categories").value);
  }
  const getCategories = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
    console.log(search);
    
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
       <form className="selector" onSubmit={getCategories} >
       <label for="cars">Choose a category:</label>
      <select name="categories" id="categories"  className="search-bar">
         <option value="general">All</option>
         <option value="business">Business</option>
         <option value="politics">Politics</option>
         <option value="technology">Technology</option>
         <option value="health">Health</option>
         <option value="entertainment">Entertainment</option>
         <option value="sports">Sports</option>
      </select>
      <button className="search-button" onClick={updateCategory} >Search</button>
       </form>  
      {/* <form className="search-form">
        <input placeholder="Categories" className="search-bar"/>
        <button className="search-button" >Search</button>
      </form> */}
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
