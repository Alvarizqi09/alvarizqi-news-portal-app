import { useState } from 'react';
import PropTypes from 'prop-types';

const NewsArticle = ({ article }) => {
  const [showFullArticle, setShowFullArticle] = useState(false);

  const toggleFullArticle = () => {
    setShowFullArticle(!showFullArticle);
  };

  return (
    <div className="border p-4">
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} className="my-2" />
      <p>{article.author ? `Author: ${article.author}` : `Source: ${article.source.name}`}</p>
      <p>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
      {!showFullArticle ? (
        <button onClick={toggleFullArticle} className="bg-blue-500 text-white p-2 mt-2">
          Read Full Article
        </button>
      ) : (
        <div>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Read more
          </a>
        </div>
      )}
    </div>
  );
};
    NewsArticle.propTypes = {
        article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired, // Tambahkan tipe prop ini
        author: PropTypes.string,
        source: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        publishedAt: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        }).isRequired,
    };

export default NewsArticle;
