import data from '../assets/data.json'
import { useState } from 'react'

const UserForm = () => {
    const [userData, setUserData] = useState({
        tipo: 0,
        ubi: '',
        m2: 20,
        anio: 1800,
    });

        const displayData=data.map(
            (info, index)=>{
                if (info.categoria === 'propiedad') {
                    return(
                        <option key={index} value={info.factor}> {info.tipo} </option>
                    )
                }
            }
        )
    
        const displayData2=data.map(
            (info, index)=>{
                if (info.categoria === 'ubicacion') {
                    return(
                        <option key={index} value={info.factor}> {info.tipo}</option>
                    )
                }
            }
        )

        const handleM2Change = (e) => {
            setUserData({...userData, m2: e.target.value});
        }

        const handleAnioChange = (e) => {
            setUserData({...userData, anio: e.target.value});
        }

        const handleUbicacion = (e) => {
            setUserData({...userData, ubi: e.target.value});
        }

        const handleTipoPropiedad = (e) => {
            setUserData({...userData, tipo: e.target.value});
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            resultado();
        }

        function resultado(){

            const resumen = document.querySelector("#resume")
            //Precio M2
            const precioM2 = userData.m2 * 40.50;
            //Sacar edad
            const edad = 2024 - userData.anio;
            //Precio dependiendo la edad del lugar
            const precioEdad1 = precioM2 * 0.20;
            const precioEdad2 = precioM2 * 0.40;
            const precioTEdad3 = precioM2 * 0.60;

            //Valor total dependiend la edad y teniendo en cuenta los factores de tipo y ubicacion
            if (edad >= 200) {
                let precioTotal1 =  precioEdad1 * userData.tipo * userData.ubi;
                precioTotal1 = parseFloat(Math.round(precioTotal1 * 100) / 100).toFixed(2);
                resumen.innerText = precioTotal1;

            } if (edad >= 100 && edad < 200) {
                let precioTotal2 =  precioEdad2 * userData.tipo * userData.ubi;
                precioTotal2 = parseFloat(Math.round(precioTotal2 * 100) / 100).toFixed(2);
                resumen.innerText = precioTotal2;

            } if (edad < 100) {
                let precioTotal3 =  precioTEdad3 * userData.tipo * userData.ubi;
                precioTotal3 = parseFloat(Math.round(precioTotal3 * 100) / 100).toFixed(2);
                resumen.innerText = precioTotal3;
            }
        }

    
    return (
        <form className="flex flex-col items-center justify-center p-8 w-full" onSubmit={handleSubmit}>
            <div className="bg-slate-200 p-8 rounded">
                <h1 className="font-bold text-3xl p-2">Completar con los datos solicitados:</h1>

                <div className="p-2">
                    <label htmlFor="" className="flex font-semibold text-xl p-2">Tipo de Propiedad</label>
                    <select name="" id="tipoPropiedad" onChange={handleTipoPropiedad} className="text-start text-xl w-full" required>
                        <option value="">-- Seleccionar Propiedad --</option>
                        {displayData}
                    </select>
                </div>

                <div className="p-2">
                    <label htmlFor="" className="flex font-semibold text-xl p-2">Ubicación</label>
                    <select name="" id="ubicacion" onChange={handleUbicacion} className="text-start text-xl w-full" required>
                    <option value="">-- Seleccionar Ubicación --</option>
                        {displayData2}
                    </select>
                </div>

                <div className="p-2">
                    <label htmlFor="" className="flex font-semibold text-xl p-2">Ingresar Metros Cuadrados:</label>
                    <input id="metros" className="w-full text-xl" value={userData.m2} onChange={handleM2Change} type="number" min={20} required/>
                </div>

                <div className="p-2">
                    <label htmlFor="" className="flex font-semibold text-xl p-2">Ingresar Año de Construcción:</label>
                    <input id="año" className="w-full text-xl" type="number" value={userData.anio} onChange={handleAnioChange} min={1800} max={2024} required/>
                </div>

                <div className="flex flex-col items-center justify-center p-6 w-full">
                    <div className="flex items-center justify-center">
                        <button id="btnForm" type="submit" className="text-center text-xl mt-4 p-2 bg-slate-300 hover:bg-green-700 text-black hover:text-white rounded-xl">Cotización</button>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center p-6 w-full">
                    <p className='text-green-700 text-2xl font-semibold text-center'>Precio Estimado: $</p>
                    <p id='resume' className='text-green-700 text-2xl font-bold text-center'> 0,00 </p> 
                </div>

            </div>
        </form>
    )   
  }
  
  export default UserForm  
