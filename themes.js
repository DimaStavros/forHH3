let btn = document.getElementById("theme-button");
let link = document.getElementById("theme-link");
let logo = document.getElementById("logo-link");
let nameLogo = document.getElementById("nameLogo-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "light.css";
    let darkTheme = "dark.css";
    let darkLogo = "darkMod/Logo2.png";
    let lightLogo = "Header/Logo2.png";
    let nameDarkLogo = "darkMod/Pepelane.png";
    let nameLightLogo = "Header/Pepelane.png";

    let currTheme = link.getAttribute("href");
    let currLogo = logo.getAttribute("src");
    let currNameLogo = nameLogo.getAttribute("src");

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
     currLogo = darkLogo;
     currNameLogo = nameDarkLogo;
    }
    else
    {
   	 currTheme = lightTheme;
     currLogo = lightLogo;
     currNameLogo = nameLightLogo;
    }

    link.setAttribute("href", currTheme);
    logo.setAttribute("src", currLogo);
    nameLogo.setAttribute("src", currNameLogo);

}
