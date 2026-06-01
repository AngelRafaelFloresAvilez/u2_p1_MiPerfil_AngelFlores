const boton = document.getElementById("btn-saludo");
const botonNombre = document.getElementById("btn-nombre");
let saludoMostrado = false;
let nombreMostrado = false;

boton.addEventListener("click", function() {
    const seccionContacto = document.getElementById("contacto");

    if (!saludoMostrado) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Gracias por visitar mi perfil. Espero que volvamos a vernos!";
        mensaje.style.color = "#27ae60";
        mensaje.style.fontWeight = "bold";
        seccionContacto.appendChild(mensaje);

        boton.textContent = "Saludo enviado";
        boton.disabled = true;
        boton.style.backgroundColor = "#7f8c8d";

        saludoMostrado = true;
    }
});

botonNombre.addEventListener("click", function() {
    const seccionNombre = document.querySelector("h1");

    if (!nombreMostrado) {
        const mensajeD = document.createElement("p");
        mensajeD.textContent = "Angel Rafael Flores Avilezzzz";
        mensajeD.style.color = "#27ae60";
        mensajeD.style.fontWeight = "bold";
        seccionNombre.appendChild(mensajeD);

        botonNombre.textContent = "Nombre colocado";
        botonNombre.disabled = true;
        botonNombre.style.backgroundColor = "#7f8c8d";

        nombreMostrado = true;
    }
});