# Proyecto con React

#Proyecto React Diplomatura Front-End UNTREF
#Realizado por: Lautaro Linari

https://proyecto-final-react-xi-rosy.vercel.app/

---------------------------------------------------------------------------------------------------------------------
instrucción para ejecturalo localmente:

-Descomprimir el ZIP
-Abrir la carpeta extraída en el VSC.
-Abrir una terminal y ejecutar el comando 'npx create-vite proyecto-react-lautaro --template react'.
-Una vez terminado vacíe la carpeta 'proyecto-react-lautaro'.
-Luego copié los archivos extraídos del ZIP y peguelos en la carpeta 'proyecto-react-lautaro'.
-En la terminal use el comando 'cd proyecto-react-lautaro'.
-Ingrese 'npm install'.
-Una vez termine ingrese 'npm run dev'.

Podra visualizar el proyecto de manera local.

---------------------------------------------------------------------------------------------------------------------
Características del Proyecto:

    -Obtención de los datos de un JSON a partir de useState.
    -Carga de forma dinámica las opciones del formulario desde un archivo JSON.
    -Modo claro o oscuro (utilización de useState y useEffect).
    -Función resultado para obtener el valor final por mes.
    -Utilización de props para no cargar de manera repetiva div/img/títulos.
    -Uso de eventos (onClick, onChange, onSubmit) para interactuar con los elementos del DOM.

---------------------------------------------------------------------------------------------------------------------
Estructura del Proyecto: 
    • Esta divido en carpetas y subcarpetas para asi establecer la estructura de carpetas básica.

HTML:
    • index.html: La página principal que se renderiza mediante main.jsx

CSS:
    • index.css: Contiene únicamente el tipo de letra utilizado en el proyecto y las opciones necesarias de Tailwind.

JSON:
    • data.json: Un archivo JSON que contiene todo los datos de ubicación, factor de ubicación, tipo de propiedad y factor de propiedad.

JSX:
    • UserForm.jsx: El archivo React que contiene el formulario interactivo.
    • Nav.jsx: Este archivo React representa un título y el boton de modo claro u oscuro.
    • Footer.jsx: El archivo React contiene únicamente la firma del creador del proyecto.
    • Header.jsx: Este archivo React únicamente muestra un banner de fondo con una descripción de lo que hace el proyecto en sí.
    • Cobertura.jsx: Es un archivo React contiene las tarjetas/cards donde se muestran los costos de cada cobertura y su valor final que se tiene en cuenta para la función resultado.
    • DivCobertura.jsx: El archivo React contiene únicamente div para simplificar el contenido de Cobertura.jsx, además muestra la utilización de props.
    • Section.jsx: Es un archivo React contiene una section para representar el contenido sin costo.
    • Card.jsx: El archivo React contiene únicamente un div para simplificar el contenido de Section.jsx, además muestra la utilización de props.

ADD:
    • En este proyecto se utilizó TailWind para toda estilización del proyecto, también GoogleFonts para tipo de letra.

---------------------------------------------------------------------------------------------------------------------
Consideraciones: 
x - No logré la utilización de useEffect y fetch para la obtención de datos del JSON.
x - A la hora de realizar el despliegue en Vercel, no logro que los Iconos de Cobertura.jsx logren verse.
x - No logré la utilización de validaciones en el formulario.