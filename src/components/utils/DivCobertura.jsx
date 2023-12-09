import PropTypes from 'prop-types';

function DivCobertura(props) {
    const {image, text, valor, title} = props;

    return (
        <>
          <p className="text-center text-xl md:text-3xl font-semibold text-orange-500">{title}</p>                              
          <div className="flex items-center p-4 border-b w-full">
            <div className={image}/>
            <p className="flex text-base lg:text-lg pl-2">{text} <p className="font-semibold lg:pl-5 pl-2">{valor}</p></p>
          </div>
        </>
    )
} 

DivCobertura.propTypes = {
    image: PropTypes.array,
    title: PropTypes.array,
    text: PropTypes.array,
    valor: PropTypes.array,
}
  
export default DivCobertura