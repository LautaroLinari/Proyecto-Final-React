import DivCobertura from './utils/DivCobertura.jsx'

function Cobertura() {
  return (
    <div className="">
        <h3 className="text-2xl font-bold tracking-wider text-center bg-gray-200 w-auto p-2">Opciones de Cobertura:</h3>
        <div className="flex flex-row items-center justify-center gap-10 p-12 bg-cyan-100">
            <div className="flex flex-col items-start border border-black rounded p-10 bg-white">

                <p className="text-center text-3xl font-semibold text-orange-500">Plan Basico:</p>                              
                <DivCobertura image="../../src/assets/icons/house-fire.png" text="Contra incendios:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/stolen-house.png" text="Robo de tus cosas:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/damaged-house.png" text="Daños en tu hogar:" valor="$500"/>
                <div className="flex flex-col items-center justify-center pt-10 border-t">
                    <h2 className="text-2xl text-green-600 font-bold"> Precio Total: $2000</h2>
                </div>

            </div>

            <div className="flex flex-col items-start border border-black rounded p-8 bg-white">

                <p className="text-center text-3xl font-semibold text-orange-500">Plan Completo:</p>
                <DivCobertura image="../../src/assets/icons/house-fire.png" text="Contra incendios:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/stolen-house.png" text="Robo de tus cosas:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/damaged-house.png" text="Daños en tu hogar:" valor="$500"/>
                <DivCobertura image="../../src/assets/icons/appliance.png" text="Reposicion Electrodomesticos:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/civil.png" text="Responsabilidad Civil:" valor="$400"/>
                <DivCobertura image="../../src/assets/icons/glasses.png" text="Cristales:" valor="$350"/>
                <div className="flex items-center justify-center pt-10 border-t">
                    <h2 className="text-2xl text-green-600 font-bold"> Precio Total: $3500</h2>
                </div>
            </div>  

        </div>
    </div>

  );
}

export default Cobertura
