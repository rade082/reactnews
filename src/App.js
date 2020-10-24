import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import News from './components/News'
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    getNews()
  }, [])

  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5d2a31b1fb53495498bcf392c3cce810`);
    const data = await response.json();
    console.log(data.articles);
    setNews(data.articles);
  }
 
  return (
    <div className="App">
      {news.map(articles =>(
        <News
         key={articles.title}
         title={articles.title}
         source={articles.publishedAt}
         image={articles.urlToImage}
         description={articles.content} 
         link={articles.url} />
      ))}
    </div>
  );
}

export default App;
