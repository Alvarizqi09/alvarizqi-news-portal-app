
import PropTypes from 'prop-types';

const Button = ({id, label, onClick}) => {
  return (
  <button
     id={id}
     onClick={onClick}
     className='hover:bg-orange-600 focus:outline-none border-none w-full h-12 bg-orange-500 rounded-md text-white font-semibold flex justify-center items-center'
  >
    {label}
  </button>
  )
}
Button.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired, // Adding validation for 'label'
    onClick: PropTypes.func.isRequired,
  };
export default Button