import PropTypes from 'prop-types';

//Componente con props para usar posteriormente
function DivCobertura(props) {
    const {image, text, valor, title} = props;

    return (
        <>
          <p className="text-center text-xl md:text-3xl font-semibold text-orange-500">{title}</p>                              
          <div className="flex items-center p-4 border-b w-full">
            <img className='' src={image} alt=""/>
            <p className="flex text-base lg:text-lg pl-2">{text} <p className="font-semibold text-base md:text-lg lg:pl-5 pl-2">{valor}</p></p>
          </div>
        </>
    )
} 

//Declaro el tipo de props
DivCobertura.propTypes = {
    image: PropTypes.array,
    title: PropTypes.array,
    text: PropTypes.array,
    valor: PropTypes.array,
}
  
export default DivCobertura