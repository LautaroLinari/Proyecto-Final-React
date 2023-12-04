import { useEffect, useState } from "react"
    function Nav() {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        
        return "light";
    });


    useEffect(() => {
        if(theme ==="dark"){
            document.querySelector('html').classList.add("dark");
        } else{
            document.querySelector('html').classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    return (
        <div className="flex items-center justify-around bg-slate-100 p-4 dark:bg-neutral-800">
            <h2 className="font-bold text-xl dark:text-white">Seguros para tu Hogar</h2>
            {/* <ul className="flex items-center gap-16">
                <li className="cursor-pointer p-2 rounded-md hover:bg-blue-400 hover:text-white dark:text-white dark:hover:bg-blue-400"><a href="">Inicio</a></li>
                <li className="cursor-pointer p-2 rounded-md hover:bg-blue-400 hover:text-white dark:text-white dark:hover:bg-blue-400"><a href="">Formulario</a></li>
                <li className="cursor-pointer p-2 rounded-md hover:bg-blue-400 hover:text-white dark:text-white dark:hover:bg-blue-400"><a href="">Contacto</a></li>
            </ul> */}
            <button className="bg-slate-400 p-2 rounded hover:bg-slate-400 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-400" onClick={handleChangeTheme}>Theme</button>
        </div>
    )
  }
  
  export default Nav