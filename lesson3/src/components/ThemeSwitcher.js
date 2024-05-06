import { useState } from "react";
import Content from "./Content";


function ThemeSwitcher() {
    const [theme, setTheme] = useState("light");
    
    function changeTheme() {
        if (theme === "light") {
            setTheme("dark");
            document.querySelector('body').style.backgroundColor="black";
        } else {
            setTheme("light");
            document.querySelector('body').style.backgroundColor="white";
        }
    }

    return ( 
        <>
            <button onClick={changeTheme}> 
            Другая тема
            </button>
            <Content themecolor={theme} />
        </>
     );
}

export default ThemeSwitcher;