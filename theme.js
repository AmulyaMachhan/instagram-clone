const themeButtonToggle = document.querySelector("[data-theme-toggle]");

themeButtonToggle.addEventListener( "click" , function (){
 
    const htmlElement = document.querySelector('html');
    const dataThemeValue = htmlElement.getAttribute('data-theme');

    htmlElement.setAttribute('data-theme' , dataThemeValue === "light" ? "dark" : "light");
});