import { useState, useEffect } from 'react';
import axios from 'axios';
import CategorySelector from './CategorySelector';
import NewsArticle from './NewsArticle';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=6072d7b6367e458eb084484e595bf216`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div>
        <h1>News Portal</h1>
        <CategorySelector onSelectCategory={handleCategoryChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <NewsArticle key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
