import PropTypes from 'prop-types';

function DivCobertura(props) {
    const {image, text, valor, title} = props;

    return (
        <>
          <p className="text-center text-3xl font-semibold text-orange-500">{title}</p>                              
          <div className="flex items-center p-4 border-b">
            <img className='' src={image} alt=""/>
            <p className="flex text-lg pl-2">{text} <p className="font-semibold text-end pl-5">{valor}</p></p>
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