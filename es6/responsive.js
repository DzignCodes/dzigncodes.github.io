document.getElementById("boton_mirar_servicios").style.width = "270px";
$(window).resize(() => {
    if (document.getElementById("contenedor").offsetWidth <= 550) {
        document.getElementById("boton_mirar_servicios").style.width = "90vw";
    } else {
        document.getElementById("boton_mirar_servicios").style.width = "270px";
    }
});