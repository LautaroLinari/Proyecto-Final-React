import PropTypes from 'prop-types';

//Componente con props para usar posteriormente
function Card(props) {
    const {image, text, title} = props;

  return (

        <div className="text-center grow m-4">
            <div className='flex justify-center items-center'>
                <img src={image} alt="Plomeria" className="w-12 h-12 " />
            </div>
            <h3 className='text-center text-lg md:text-xl text-black dark:text-slate-300 font-semibold mt-2 mb-2'>{title}</h3>
            <p className="text-black dark:text-slate-200 md:text-lg text-base p-3">{text}</p>
        </div>
  )
}

export default Card


//Declaro el tipo de props
Card.propTypes = {
    image: PropTypes.array,
    title: PropTypes.array,
    text: PropTypes.array,
}