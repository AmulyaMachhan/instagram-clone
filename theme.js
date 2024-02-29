function calculateSettingAsTheme({localStorageTheme, systemSettingDark}){
    if(localStorageTheme !== null){
        return localStorageTheme;
    }
    if(systemSettingDark.matches){
        return "dark";
    }
    return "light";
}

function toggleTheme({theme}){
    document.querySelector("html").setAttribute("data-theme",theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsTheme({localStorageTheme,systemSettingDark});

button.addEventListener("click" , (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    toggleTheme({theme : newTheme});

    currentThemeSetting =newTheme;
});