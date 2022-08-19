

const mostrar_menu = () => {
    const menu = document.querySelector(".menu")
    menu.classList.toggle("mostrar_menu");
};

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);
console.log("Mostrar Menu");




window.onscroll = function(){
    var position = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.createElement('icon_heart');
    var elemento2 = document.createElement('icon_fire');
    elemento1.style.bottom = position * 0.1+"px";
    elemento2.style.top = position * 0.1+"px";
}