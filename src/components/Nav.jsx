import { useEffect, useState } from "react"


    function Nav() {
    const [theme, setTheme] = useState(() => {
        //Preferencia por claro o oscuro
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        
        return "light";
    });

    //Claro o Oscuro
    useEffect(() => {
        if(theme ==="dark"){
            document.querySelector('html').classList.add("dark");
        } else{
            document.querySelector('html').classList.remove("dark");
        }
    }, [theme]);

    //onClick para cambiar de modo/theme.
    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }


    return (
        <div className="flex items-center justify-around bg-slate-100 p-3 dark:bg-neutral-950 fixed w-full">
            <h2 className="font-bold text-lg md:text-xl dark:text-white">Seguros para tu Hogar</h2>
            
            <label className="relative inline-flex items-center">
                <input type="checkbox" value="" className="sr-only peer" />
                <div onClick={handleChangeTheme} className="cursor-pointer w-11 h-6 border rounded border-gray-200 bg-gray-200 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-neutral-500"></div>
                <div alt="moon" onClick={handleChangeTheme} className="bg-[url('../assets/icons/moon.png')] w-6 ml-5 h-6 cursor-pointer"/>
            </label>
    
        </div>
    )
  }
  
  export default Nav