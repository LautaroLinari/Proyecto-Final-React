import data from '../assets/data.json'
import { useState } from 'react'

const UserForm = () => {
    const [userData, setUserData] = useState({
        tipo: '0',
        ubi: '0',
        m2: '20',
        anio: '1800',
        cobertura: '',
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
        const handleCobertura = (e) => {
            setUserData({...userData, cobertura: e.target.value});
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            resultado();

        }

        function resultado(){
            //Variable para mostrar el precio total
            const resumen = document.querySelector("#resume")
            //Precio M2
            const precioM2 = userData.m2 * 38.20;
            //Sacar edad
            const edad = 2024 - userData.anio;
            //Precio dependiendo la edad del lugar
            const precioEdad1 = precioM2 * 0.30;
            const precioEdad2 = precioM2 * 0.60;
            const precioTEdad3 = precioM2 * 0.90;

            //Valor total dependiend la edad y teniendo en cuenta los factores de tipo y ubicacion
            if (edad >= 200) {
                let precioTotal1 =  precioEdad1 * userData.tipo * userData.ubi;
                //Sumarle la cobertura elegida
                if (userData.cobertura === 'basica') {
                    let basica = 2000;
                    precioTotal1 = precioTotal1 + basica;
                    //Mostrar unicamente 2 float
                    precioTotal1 = parseFloat(Math.round(precioTotal1 * 100) / 100).toFixed(2);
                    resumen.innerText = precioTotal1;
                    
                } else{
                    let completa = 3500;
                    precioTotal1 = precioTotal1 + completa;
                    //Mostrar unicamente 2 float
                    precioTotal1 = parseFloat(Math.round(precioTotal1 * 100) / 100).toFixed(2);
                    resumen.innerText = precioTotal1;
                }

            } if (edad >= 100 && edad < 200) {
                let precioTotal2 =  precioEdad2 * userData.tipo * userData.ubi;
                //Sumarle la cobertura elegida
                if (userData.cobertura === 'basica') {
                    let basica = 2000;
                    precioTotal2 = precioTotal2 + basica;
                    //Mostrar unicamente 2 float
                    precioTotal2 = parseFloat(Math.round(precioTotal2 * 100) / 100).toFixed(2);
                    resumen.innerText = precioTotal2;
                } else{
                    let completa = 3500;
                    precioTotal2 = precioTotal2 + completa;
                    //Mostrar unicamente 2 float
                    precioTotal2 = parseFloat(Math.round(precioTotal2 * 100) / 100).toFixed(2);
                    resumen.innerText = precioTotal2;
                }
                
            } if (edad < 100) {
                let precioTotal3 =  precioTEdad3 * userData.tipo * userData.ubi;
                //Sumarle la cobertura elegida
                if (userData.cobertura === 'basica') {
                    let basica = 2000;
                    precioTotal3 = precioTotal3 + basica;
                    //Mostrar unicamente 2 float
                    precioTotal3 = parseFloat(Math.round(precioTotal3 * 100) / 100).toFixed(2);
                    resumen.innerText = precioTotal3;
                } else{
                    let completa = 3500;
                    precioTotal3 = precioTotal3 + completa;
                    //Mostrar unicamente 2 float
                    precioTotal3 = parseFloat(Math.round(precioTotal3 * 100) / 100).toFixed(2);
                    resumen.innerText = precioTotal3;
                }
            }
        }

    
    return (
        <div className={``}>
            <form className="flex flex-col items-center justify-center p-8 w-full bg-white dark:bg-neutral-900" onSubmit={handleSubmit}>
                <div className="bg-slate-200 dark:bg-neutral-800 text-black dark:text-white p-8 rounded">
                    <h1 className="font-bold text-3xl p-2">Completar con los datos solicitados:</h1>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold text-xl p-2">Tipo de Propiedad</label>
                        <select name="" id="tipoPropiedad" onChange={handleTipoPropiedad} className="text-start md:text-xl w-full pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" required>
                            <option value="">-- Seleccionar Propiedad --</option>
                            {displayData}
                        </select>
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold text-xl p-2">Ubicación</label>
                        <select name="" id="ubicacion" onChange={handleUbicacion} className="text-start md:text-xl w-full pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" required>
                        <option value="">-- Seleccionar Ubicación --</option>
                            {displayData2}
                        </select>
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold text-xl p-2">Ingresar Metros Cuadrados:</label>
                        <input id="metros" className="w-full md:text-xl pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" value={userData.m2} onChange={handleM2Change} type="number" min={20} max={500} required/>
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold text-xl p-2">Ingresar Año de Construcción:</label>
                        <input id="año" className="w-full md:text-xl pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" type="number" value={userData.anio} onChange={handleAnioChange} min={1800} max={2024} required/>
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold md:text-xl p-2">Cobertura:</label>
                        <select name="" id="cobertura" onChange={handleCobertura} className="text-start md:text-xl w-full pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" required>
                            <option value="">--Seleccionar Cobertura--</option>
                            <option value="basica">Basica</option>
                            <option value="completa">Completa</option>
                        </select>

                    <div className="flex flex-col items-center justify-center p-6 w-full">
                        <div className="flex items-center justify-center">
                            <button id="btnForm" type="submit" className="shadow text-center text-xl mt-4 p-2 bg-slate-400 dark:bg-neutral-600 hover:bg-green-700 dark:hover:bg-green-700 text-black dark:text-white dark:hover:text-black hover:text-white rounded-xl">Cotización</button>
                        </div>
                    </div>


                    </div>

                    <div className="flex flex-row items-center justify-center p-6 w-full">
                        <p className='text-green-700 text-4xl font-semibold text-center pr-1'>$ </p>
                        <p id='resume' className='text-green-700 text-5xl font-bold text-center'> 0,00 </p> 
                        <p className='text-green-800 text-lg font-bold text-center pl-1'>/mes</p>
                    </div>

                </div>
            </form>
        </div>
    )   
  }
  
  export default UserForm  
