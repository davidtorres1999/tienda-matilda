window.addEventListener( 'DOMContentLoaded' , function(){

/* Despliegue de menú hamburguesa */
const barraNavegacion = document.querySelector("#menu-navegacion");
const menuHamburguesa = document.querySelector("#menu-hamburguesa");
const btnSobreNosotras = document.querySelector("#btn-sobrenosotras")

menuHamburguesa.addEventListener("click",function(){
    barraNavegacion.classList.toggle('menu-visible');
});

btnSobreNosotras.addEventListener("click",function(){
    barraNavegacion.classList.toggle('menu-visible');
});

});