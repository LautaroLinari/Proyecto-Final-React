import PropTypes from 'prop-types';

function DivCobertura(props) {
    const {image, text, valor} = props;

    return (
        <>
          <div className="flex items-center p-2 border-t">
            <img src={image} alt=""/>
            <p className="flex text-lg pl-2">{text} <p className="font-semibold text-end pl-4">{valor}</p></p>
          </div>
        </>
    )
} 

DivCobertura.propTypes = {
    image: PropTypes.array,
    text: PropTypes.array,
    valor: PropTypes.array,

}
  
export default DivCobertura