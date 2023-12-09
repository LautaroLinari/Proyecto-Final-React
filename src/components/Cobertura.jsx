import DivCobertura from './utils/DivCobertura.jsx'

function Cobertura() {
  return (
    <div className="">
        <h3 className="text-xl lg:text-2xl font-bold tracking-wide text-cyan-700 text-center bg-slate-200 dark:bg-neutral-800 w-auto underline p-2">Opciones de seguro de Cobertura:</h3>
        <div className="grid lg:flex items-center justify-center p-12 lg:gap-10 bg-slate-200 dark:bg-neutral-800">

            <div className=" p-8 border rounded border-white bg-white dark:bg-neutral-800 text-black dark:text-white shadow-2xl hover:border-neutral-600">
                <DivCobertura title='Plan Básico:'/>                         
                <DivCobertura image="bg-[url('../assets/icons/house-fire.png')]" text="Contra incendios:" valor="$750"/>
                <DivCobertura image="bg-[url('../assets/icons/stolen-house.png')]" text="Robos en su hogar:" valor="$750"/>
                <DivCobertura image="bg-[url('../assets/icons/damaged-house.png')]" text="Daños en su hogar:" valor="$500"/>
                <div className="pt-6">
                    <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-green-700 rounded"> Precio Total: $2000</h2>
                </div>

            </div>

            <div className=" mt-10 border border-white rounded p-8 bg-white dark:bg-neutral-800 dark:text-white shadow-2xl hover:border-neutral-600">
                <DivCobertura title='Plan Completo:'/>   
                <DivCobertura image="bg-[url('../assets/icons/house-fire.png')]" text="Contra incendios:" valor="$750"/>
                <DivCobertura image="bg-[url('../assets/icons/stolen-house.png')]" text="Robos en su hogar:" valor="$750"/>
                <DivCobertura image="bg-[url('../assets/icons/damaged-house.png')]" text="Daños en su hogar:" valor="$500"/>
                <DivCobertura image="bg-[url('../assets/icons/appliance.png')]" text="Reposición Electrodomesticos:" valor="$750"/>
                <DivCobertura image="bg-[url('../assets/icons/civil.png')]" text="Responsabilidad Civil:" valor="$400"/>
                <DivCobertura image="bg-[url('../assets/icons/glasses.png')]" text="Cristales:" valor="$350"/>
                <div className="pt-6">
                    <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-green-700 rounded pointer"> Precio Total: $3500</h2>
                </div>
            </div>  

        </div>
    </div>

  );
}

export default Cobertura
