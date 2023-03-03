var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function(){
    if (menu.style.display === "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
});
