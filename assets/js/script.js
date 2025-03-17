/* aparicion y adaptación menu hamburguesa */

var botonMenu = document.querySelector(".boton_menu");
var menuAmburguesa = document.querySelector(".menu_navegacion");

function interaccionBoton() {
    
    if (menuAmburguesa.style.display == 'block') {
        menuAmburguesa.style.display = 'none';
    } else {
        menuAmburguesa.style.display = 'block';
    }
};

function redimensionado() {
    if ((screen.width < 850)) {
        menuAmburguesa.style.display = 'none';
    }

    if (screen.width >= 850) {
        menuAmburguesa.style.display = 'grid';   
    }
};

botonMenu.addEventListener("click", interaccionBoton, false);

window.addEventListener("resize", redimensionado);

var enlaceWhatsapp = document.querySelector(".logo_whatsapp");
var fondoWhatsapp = document.querySelector(".fondo_whatsapp");

function cambioFondoWhatsapp(evento) {
    if (evento.type == 'mouseover') {
        fondoWhatsapp.style.backgroundColor = "rgb(46, 212, 108)";
    }
    
    if (evento.type == 'mouseout') {
        fondoWhatsapp.style.backgroundColor = "";
    }
}

enlaceWhatsapp.onmouseover = enlaceWhatsapp.onmouseout = cambioFondoWhatsapp;