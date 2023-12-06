import DivCobertura from './utils/DivCobertura.jsx'

function Cobertura() {
  return (
    <div className="">
        <h3 className="text-2xl font-bold tracking-wide text-cyan-700 text-center bg-slate-200 w-auto underline p-2">Opciones de seguro de Cobertura:</h3>
        <div className="flex flex-row items-center justify-center gap-10 p-12 bg-slate-200">

            <div className="flex flex-col items-start border border-black rounded p-8 bg-white shadow-2xl">
                <DivCobertura title='Plan Básico:'/>                         
                <DivCobertura image="../../src/assets/icons/house-fire.png" text="Contra incendios:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/stolen-house.png" text="Robos en su hogar:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/damaged-house.png" text="Daños en su hogar:" valor="$500"/>
                <div className="flex flex-col items-center justify-center pt-10 border-t">
                    <h2 className="text-2xl text-green-600 font-bold"> Precio Total: $2000</h2>
                </div>

            </div>

            <div className="flex flex-col items-start border border-black rounded p-7 bg-white shadow-2xl">
                <DivCobertura title='Plan Completo:'/>   
                <DivCobertura image="../../src/assets/icons/house-fire.png" text="Contra incendios:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/stolen-house.png" text="Robos en su hogar:" valor="$750"/>
                <DivCobertura image="../../src/assets/icons/damaged-house.png" text="Daños en su hogar:" valor="$500"/>
                <DivCobertura image="../../src/assets/icons/appliance.png" text="Reposición Electrodomesticos:" valor="$750"/>
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
