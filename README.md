# Proyecto con React

#Proyecto React Diplomatura Front-End UNTREF
#Realizado por: Lautaro Linari

---------------------------------------------------------------------------------------------------------------------
Características del Proyecto:

    -Obtencion de los datos de un JSON a partir de useState.
    -Carga de forma dinamica las opciones del formulario desde un archivo JSON.
    -Modo claro o oscuro (utilizacion de useState y useEffect).
    -Funcion resultado para obtener el valor final por mes.
    -Utilizacion de props para no cargar de manera repetiva div/img/titulos.
    -Uso de eventos (onClick, onChange, onSubmit) para interactuar con los elementos del DOM.

---------------------------------------------------------------------------------------------------------------------
Estructura del Proyecto: 
    • Esta divido en carpetas y subcarpetas para asi establecer la estructura de carpetas.

HTML:
    • index.html: La página principal que se renderiza mediante main.jsx

CSS:
    • index.css: Contiene unicamente el tipo de letra utilizado en el proyecto y las opciones necesarias para Tailwind.

JSON:
    • data.json: Un archivo JSON que contiene todo los datos de ubicacion, factor de ubicacion, tipo de propiedad y factor de propiedad.

JSX:
    • UserForm.jsx: El archivo React que contiene el formulario interactivo.
    • Nav.jsx: Este archivo React representa un titulo y el boton de modo claro u oscuro.
    • Footer.jsx: El archivo React contiene unicamente la firma del creador del proyecto.
    • Header.jsx: Este archivo React unicamente muestra un banner de fondo con una descripcion de lo que hace el proyecto en si.
    • Cobertura.jsx: Es un archivo React contiene las tarjetas/cards donde se muestran los costos de cada cobertura y su valor final que se tiene en cuenta para la funcion resultado.
    • DivCobertura.jsx: El archivo React contiene unicamente div para simplificar el contenido de Cobertura.jsx, ademas muestra la utilizacion de props.
    • Section.jsx: Es un archivo React contiene una section para representar un contenido.
    • Card.jsx: El archivo React contiene unicamente div para simplificar el contenido de Section.jsx, ademas muestra la utilizacion de props.

ADD:
    • En este proyecto se utilizo TailWind para toda estilizacion del proyecto, tambien GoogleFonts para tipo de letra.

---------------------------------------------------------------------------------------------------------------------
Consideraciones: 
x - No logre la utilizacion de useEffect y fetch para la obtencion de datos del JSON
x - A la hora de realizar el despliegue en Vercel, no logro que los iconos de Cobertura logren verse.