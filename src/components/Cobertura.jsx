import DivCobertura from './utils/DivCobertura.jsx'
//Renderizo el componente divCobertura para despues poder llamarlo y cambiar el valor mediante props.

function Cobertura() {
  return (
    <div className="">
        <h3 className="text-xl md:text-2xl font-bold tracking-wide text-cyan-600 dark:text-cyan-500 text-center bg-slate-200 dark:bg-neutral-800 w-auto underline pt-5">Opciones de seguro de Cobertura:</h3>
        <div className="grid md:flex items-center justify-center p-12 md:gap-10 bg-slate-200 dark:bg-neutral-800">

            <div className="p-8 border rounded border-white bg-white dark:bg-neutral-800 text-black dark:text-white shadow-2xl hover:border-neutral-600">
                <DivCobertura title='Plan Básico:'/>                         
                <DivCobertura image="../src/assets/icons/house-fire.png" text="Contra incendios:" valor="$750"/>
                <DivCobertura image="../src/assets/icons/stolen-house.png" text="Robos en su hogar:" valor="$750"/>
                <DivCobertura image="../src/assets/icons/damaged-house.png" text="Daños en su hogar:" valor="$500"/>
                <div className="pt-6">
                    <h2 className="text-lg md:text-2xl text-white font-bold p-2 bg-green-700 rounded"> Precio Total: $2000</h2>
                </div>

            </div>

            <div className="mt-8 border border-white rounded p-8 bg-white dark:bg-neutral-800 dark:text-white shadow-2xl hover:border-neutral-600">
                <DivCobertura title='Plan Completo:'/>   
                <DivCobertura image="../src/assets/icons/house-fire.png" text="Contra incendios:" valor="$750"/>
                <DivCobertura image="../src/assets/icons/stolen-house.png" text="Robos en su hogar:" valor="$750"/>
                <DivCobertura image="../src/assets/icons/damaged-house.png" text="Daños en su hogar:" valor="$500"/>
                <DivCobertura image="../src/assets/icons/appliance.png" text="Reposición Electrodomesticos:" valor="$750"/>
                <DivCobertura image="../src/assets/icons/civil.png" text="Responsabilidad Civil:" valor="$400"/>
                <DivCobertura image="../src/assets/icons/glasses.png" text="Cristales:" valor="$350"/>
                <div className="pt-6">
                    <h2 className="text-lg md:text-2xl text-white font-bold p-2 bg-green-700 rounded pointer"> Precio Total: $3000</h2>
                </div>
            </div>  

        </div>
    </div>

  );
}

export default Cobertura
