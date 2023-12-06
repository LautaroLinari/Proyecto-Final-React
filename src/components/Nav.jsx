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
            <button className="bg-slate-400 p-2 rounded hover:bg-slate-400 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-400" onClick={handleChangeTheme}>Theme</button>
        </div>
    )
  }
  
  export default Nav