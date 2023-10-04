import { useState } from 'react';
import PropTypes from 'prop-types';

const NewsArticle = ({ article }) => {
  const [showFullArticle, setShowFullArticle] = useState(false);

  const toggleFullArticle = () => {
    setShowFullArticle(!showFullArticle);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{article.title}</h2>
        <p className="text-gray-600">
          {article.author ? `Author: ${article.author}` : `Source: ${article.source.name}`}
        </p>
        <p className="text-gray-600">Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
        {!showFullArticle ? (
          <button onClick={toggleFullArticle} className="bg-blue-500 text-white py-2 px-4 mt-2 hover:bg-blue-600">
            Read Full Article
          </button>
        ) : (
          <div>
            <p className="mt-4">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
              Read more
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
    NewsArticle.propTypes = {
        article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
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
