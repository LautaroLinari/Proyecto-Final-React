import Card from './utils/Card.jsx'

function Section() {
  return (
    <div>
        <h2 className='font-semibold text-center text-xl md:text-2xl p-6 bg-slate-200 dark:bg-neutral-800 text-red-700 dark:text-red-600'>Servicios sin costo adicional</h2>
        <section className='grid md:grid-cols-2 grid-cols-1 bg-slate-200 dark:bg-neutral-800 w-full h-76'>
            <Card image={'https://seguros.lacaja.com.ar/themes/lacaja/images/icons-red/a03-tap-water.svg'} title={'Plomería'} text={'Destape y arreglo de cañerías, llaves de agua y otras instalaciones fijas.'}/>
            <Card image={'https://seguros.lacaja.com.ar/themes/lacaja/images/icons-red/a42-kitchen.svg'} title={'Gasista'} text={'Revisión e instalación de estufas, calderas, cocinas y piloto.'}/>
            <Card image={'https://seguros.lacaja.com.ar/themes/lacaja/images/icons-red/a32-lost-keys.svg'} title={'Cerrajería'} text={'Arreglo y cambio de cerraduras, por pérdida de llaves o rotura de puerta.'}/>
            <Card image={'https://seguros.lacaja.com.ar/themes/lacaja/images/icons-red/b60-telemedicine.svg'} title={'Telemedicina'} text={'Videoconsultas médicas por WhatsApp para vos y tu grupo familiar, las 24 hs.'}/>

        </section>
    </div>
  )
}

export default Section
