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

        var dark_elements = document.getElementsByClassName("dark-theme");
        for(var i = 0; i < dark_elements.length; i++){
            dark_elements[i].classList.add("dark");
        }

    }else if(body_theme.className == "theme-dark"){
        body_theme.classList.remove("theme-dark");
        body_theme.classList.add("theme-light");
        localStorage.setItem('body-theme', 'light');
        home_image.setAttribute("src", "media/index-background.jpg");
        mexican_image.setAttribute("src", "media/mphr_logo_dark.svg");

        var dark_elements = document.getElementsByClassName("dark-theme");
        for(var i = 0; i < dark_elements.length; i++){
            dark_elements[i].classList.remove("dark");
        }

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

            var dark_elements = document.getElementsByClassName("dark-theme");
            for(var i = 0; i < dark_elements.length; i++){
                dark_elements[i].classList.remove("dark");
            }
            
        }else if(current_theme == "dark"){
            if(body_theme.className == "theme-light"){
                body_theme.classList.remove("theme-light");
                body_theme.classList.add("theme-dark");
            }

            home_image.setAttribute("src", "media/index-background-dark.jpg");
            mexican_image.setAttribute("src", "media/mphr_logo_light.svg");

            var dark_elements = document.getElementsByClassName("dark-theme");
            for(var i = 0; i < dark_elements.length; i++){
                dark_elements[i].classList.add("dark");
            }
        }
    }

        
});


var menu_icon = document.getElementById("menu-icon");

menu_icon.addEventListener("click", function(){
    var side_bar = document.getElementsByClassName("side-bar");
    
    if(side_bar[0].className.includes("show")){
        side_bar[0].setAttribute("style", "left:0; animation: hide-navbar 0.5s ease-in-out 1s forwards;");
        side_bar[0].classList.remove("show");
    }else{
        side_bar[0].setAttribute("style", "animation: show-navbar 0.5s ease-in-out 1s forwards;");
        side_bar[0].classList.add("show");
    }
    
});