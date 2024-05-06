import ThemeSwitcher from "./ThemeSwitcher";
import "./Content.css";

function Content({themecolor}) {
    return ( 
        <div>
            <span className={themecolor === "light" ? null : "dark_theme"}>Я меняю свой цвет в зависимости от темы</span>
        </div>
     );
}

export default Content;