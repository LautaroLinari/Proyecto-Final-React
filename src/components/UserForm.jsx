import data from '../assets/data.json'
import { useState } from 'react'

//Defino un Objeto de Estado
const UserForm = () => {
    const [userData, setUserData] = useState({
        tipo: '0',
        ubi: '0',
        m2: '0',
        anio: '0',
        cobertura: '',
    });

        //Guardo en una variable el recorrido del Json con una condicion y despues retorno la opcion del formulario
        const displayData=data.map(
            (info, index)=>{
                if (info.categoria === 'propiedad') {
                    return(
                        <option key={index} value={info.factor}> {info.tipo} </option>
                    )
                }
            }
        )

        //Guardo en una variable el recorrido del Json con una condicion y despues retorno la opcion del formulario
        const displayData2=data.map(
            (info, index)=>{
                if (info.categoria === 'ubicacion') {
                    return(
                        <option key={index} value={info.factor}> {info.tipo}</option>
                    )
                }
            }
        )


        //Guardo el estado de todos los valores seleccionados por el onChange
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

        //A partir del onSubmit retorno la funcion resultado para obtener el valor final por mes.
        const handleSubmit = (event) => {
            event.preventDefault();
            return resultado();
        }

        //Funcion para sacar el Precio Final:
        function resultado(){
            //Constante para mostrar el precio final por mes
            const resumen = document.querySelector("#resume")
            //Precio M2
            const precioM2 = userData.m2 * 38.20;
            //Obtener la edad del lugar
            const edad = 2024 - userData.anio;
            //Precio dependiendo la edad del lugar (multiplico al valor por metro cuadrado la edad que tiene el lugar)
            const precioEdad1 = precioM2 * 0.30;
            const precioEdad2 = precioM2 * 0.60;
            const precioTEdad3 = precioM2 * 0.90;

            //Valor total cuando la casa tiene mas de 200 años y ademas teniendo en cuenta los factores de tipo de lugar y ubicacion/zona
            if (edad >= 200) {
                let precioTotal1 =  precioEdad1 * userData.tipo * userData.ubi;
                //Sumarle la cobertura elegida
                if (userData.cobertura === 'basica') {
                    let basica = 2000;
                    precioTotal1 = precioTotal1 + basica;
                    //Mostrar unicamente 2 float
                    precioTotal1 = parseFloat(Math.round(precioTotal1 * 100) / 100).toFixed(2);
                    //A traves del innerText modifico el valor de 0 por el precio total obtenido despues del calculo.
                    resumen.innerText = precioTotal1;
                
                } else{
                    let completa = 3000;
                    precioTotal1 = precioTotal1 + completa;
                    //Mostrar unicamente 2 float
                    precioTotal1 = parseFloat(Math.round(precioTotal1 * 100) / 100).toFixed(2);
                    //A traves del innerText modifico el valor de 0 por el precio total obtenido despues del calculo.
                    resumen.innerText = precioTotal1;
                }

            } 
            //Valor total cuando la casa tiene mas de 100 y menos de 200 años, ademas teniendo en cuenta los factores de tipo de lugar y ubicacion/zona
            if (edad >= 100 && edad < 200) {
                let precioTotal2 =  precioEdad2 * userData.tipo * userData.ubi;
                //Sumarle la cobertura elegida
                if (userData.cobertura === 'basica') {
                    let basica = 2000;
                    precioTotal2 = precioTotal2 + basica;
                    //Mostrar unicamente 2 float
                    precioTotal2 = parseFloat(Math.round(precioTotal2 * 100) / 100).toFixed(2);
                    //A traves del innerText modifico el valor de 0 por el precio total obtenido despues del calculo.
                    resumen.innerText = precioTotal2;
                } else{
                    let completa = 3000;
                    precioTotal2 = precioTotal2 + completa;
                    //Mostrar unicamente 2 float
                    precioTotal2 = parseFloat(Math.round(precioTotal2 * 100) / 100).toFixed(2);
                    //A traves del innerText modifico el valor de 0 por el precio total obtenido despues del calculo.
                    resumen.innerText = precioTotal2;
                }
                
            } 
            //Valor total cuando la casa tiene menoss de 100 años, ademas teniendo en cuenta los factores de tipo de lugar y ubicacion/zona
            if (edad < 100) {
                let precioTotal3 =  precioTEdad3 * userData.tipo * userData.ubi;
                //Sumarle la cobertura elegida
                if (userData.cobertura === 'basica') {
                    let basica = 2000;
                    precioTotal3 = precioTotal3 + basica;
                    //Mostrar unicamente 2 float
                    precioTotal3 = parseFloat(Math.round(precioTotal3 * 100) / 100).toFixed(2);
                    //A traves del innerText modifico el valor de 0 por el precio total obtenido despues del calculo.
                    resumen.innerText = precioTotal3;
                } else{
                    let completa = 3000;
                    precioTotal3 = precioTotal3 + completa;
                    //Mostrar unicamente 2 float
                    precioTotal3 = parseFloat(Math.round(precioTotal3 * 100) / 100).toFixed(2);
                    //A traves del innerText modifico el valor de 0 por el precio total obtenido despues del calculo.
                    resumen.innerText = precioTotal3;
                }
            }
        }


    
    return (
        <div className={``}>
            <form className="flex flex-col items-center justify-center p-8 w-full bg-white dark:bg-neutral-900" onSubmit={handleSubmit}>
                <div className="bg-slate-200 dark:bg-neutral-800 text-black dark:text-white p-8 rounded">
                    <h1 className="font-bold text-xl md:text-3xl p-2">Completar con los datos solicitados:</h1>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold text-lg md:text-xl p-2">Tipo de Propiedad</label>
                        <select name="" id="tipoPropiedad" onChange={handleTipoPropiedad} className="text-start md:text-xl w-full pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" required>
                            <option value="">-- Seleccionar Propiedad --</option>
                            {/* Llamo a la constante para cargar todas las opciones de tipo de propiedad */}
                            {displayData}
                        </select>
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold text-lg md:text-xl p-2">Ubicación</label>
                        <select name="" id="ubicacion" onChange={handleUbicacion} className="text-start md:text-xl w-full pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" required>
                        <option value="">-- Seleccionar Ubicación --</option>
                            {/* Llamo a la constante para cargar todas las opciones de ubicacion */}
                            {displayData2}
                        </select>
                    </div>

                    <div className="p-2">
                        <label htmlFor="m2" className="flex font-semibold text-lg md:text-xl p-2">Ingresar Metros Cuadrados:</label>
                        <input id="m2" name='m2' className="w-full md:text-xl pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" value={userData.m2} onChange={handleM2Change} type="number" min={20} max={350} required/>
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold text-lg md:text-xl p-2">Ingresar Año de Construcción:</label>
                        <input id="año" className="w-full md:text-xl pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" type="number" value={userData.anio} onChange={handleAnioChange} min={1800} max={2024} required/>
                    </div>

                    <div className="p-2">
                        <label htmlFor="" className="flex font-semibold md:text-xl text-lg p-2">Cobertura:</label>
                        <select name="" id="cobertura" onChange={handleCobertura} className="text-start md:text-xl w-full pl-2 bg-white dark:bg-neutral-600 text-black dark:text-white" required>
                            <option value="">--Seleccionar Cobertura--</option>
                            <option value="basica">Basica</option>
                            <option value="completa">Completa</option>
                        </select>

                    <div className="flex flex-col items-center justify-center p-4 w-full">
                        {/* Declarado tipo Submit para utilizarlo correctamente en el onSubmit y obtener el precio final por mes */}
                        <div className="flex items-center justify-center">
                            <button id="btnForm" type="submit" className="shadow text-center text-lg md:text-xl mt-4 p-2 bg-slate-400 dark:bg-neutral-600 hover:bg-green-700 dark:hover:bg-green-700 text-black dark:text-white dark:hover:text-black hover:text-white rounded-xl">
                                Cotizar
                            </button>
                        </div>
                    </div>  


                    </div>

                    <div className="flex flex-row items-center justify-center p-2 w-full">
                        <p className='text-green-700 text-2xl md:text-4xl font-semibold text-center pr-1'>$ </p>
                        {/* Tiene el id: resume para poder modificarlo y mostrar el precio final */}
                        <p id='resume' className='text-green-700 text-3xl md:text-5xl font-bold text-center'> 0,00 </p> 
                        <p className='text-green-800 text-base md:text-lg font-bold text-center pl-1'>/mes</p>
                    </div>

                </div>
            </form>
        </div>
    )   
  }
  
  export default UserForm  
