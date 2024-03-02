import { useEffect, useState } from "react";
import NewsItem from "./newsItem";

const NewsBox = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        console.log(data)
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-primary">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default NewsBox;
