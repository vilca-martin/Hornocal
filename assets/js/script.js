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

menuAmburguesa.addEventListener("resize", redimensionado);

botonMenu.addEventListener("click", interaccionBoton, false);

var enlaceWhatsapp = document.querySelector(".whatsapp");
var fondoWhatsapp = document.querySelector(".fondo_whatsapp");

function cambioFondoWhatsapp(evento) {
    if (evento.type == 'mouseover') {
        fondoWhatsapp.style.backgroundColor = "rgb(12, 193, 67)";
    }
    
    if (evento.type == 'mouseout') {
        fondoWhatsapp.style.backgroundColor = "";
    }
}

enlaceWhatsapp.onmouseover = enlaceWhatsapp.onmouseout = cambioFondoWhatsapp;