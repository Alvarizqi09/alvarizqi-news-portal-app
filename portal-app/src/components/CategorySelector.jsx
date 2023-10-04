import PropTypes from 'prop-types';

const CategorySelector = ({ onSelectCategory }) => {
  const categories = ['general', 'business', 'technology', 'sports', 'health', 'science'];

  return (
    <div className="my-4">
      <label htmlFor="categorySelect">Select Category: </label>
      <select
        id="categorySelect"
        onChange={(e) => onSelectCategory(e.target.value)}
        className="ml-2 p-2"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategorySelector.propTypes = {
    onSelectCategory: PropTypes.func.isRequired, // Tambahkan tipe prop ini
  };
  
export default CategorySelector;
