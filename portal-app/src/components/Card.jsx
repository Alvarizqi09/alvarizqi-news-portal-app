import PropTypes from 'prop-types';
import Button from './Button'

const Card = ({id, title, author, image, onClick}) => {
  return (
    <div
    id={id}
    className='w-80 h-96 bg-white rounded-md shadow-md grid grid-cols-1 gap-y-10'
    >
        <img
         src={image}
        className='w-32 h-32 mx-auto'
        />
        <h2 className='font-semibold flex overflow:hidden'>{title}</h2>
        <h3 className='font-semibold flex overflow:hidden'>{author}</h3>
        <div className='w-40 flex mx-auto'>
        <Button id={'details'} label={'Lihat Detail'} onClick={onClick}/>
        </div>

    </div>
  )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired, // Adding validation for 'author'
    title: PropTypes.string.isRequired, // Adding validation for 'title'
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Card