var change_theme = document.getElementById("change-theme-button");
var body_theme = document.getElementById("body");

change_theme.addEventListener("click", () => {
    var home_image = document.getElementById("home-image");
    var mexican_image = document.getElementById("mexican-logo");
    if(body_theme.className == "theme-light"){
        body_theme.classList.remove("theme-light");
        body_theme.classList.add("theme-dark");
        localStorage.setItem('body-theme', 'dark');
        home_image.setAttribute("src", "media/index-background-dark.jpg");
        mexican_image.setAttribute("src", "media/mphr_logo_light.svg");
    }else if(body_theme.className == "theme-dark"){
        body_theme.classList.remove("theme-dark");
        body_theme.classList.add("theme-light");
        localStorage.setItem('body-theme', 'light');
        home_image.setAttribute("src", "media/index-background.jpg");
        mexican_image.setAttribute("src", "media/mphr_logo_dark.svg");
    }
});


document.addEventListener("DOMContentLoaded", (event) => {
    var home_image = document.getElementById("home-image");
    var current_theme = localStorage.getItem("body-theme");
    var mexican_image = document.getElementById("mexican-logo");
    if(typeof current_theme != "undefined" && current_theme != null){
        if(current_theme == "light"){
            if(body_theme.className == "theme-dark"){
                body_theme.classList.remove("theme-dark");
                body_theme.classList.add("theme-light");
            }
            home_image.setAttribute("src", "media/index-background.jpg");
            mexican_image.setAttribute("src", "media/mphr_logo_dark.svg");
            
        }else if(current_theme == "dark"){
            if(body_theme.className == "theme-light"){
                body_theme.classList.remove("theme-light");
                body_theme.classList.add("theme-dark");
            }
            home_image.setAttribute("src", "media/index-background-dark.jpg");
            mexican_image.setAttribute("src", "media/mphr_logo_light.svg");
        }
    }

        
});