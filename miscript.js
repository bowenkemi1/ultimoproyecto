function sumar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var suma = n1+n2+n3;
    document.getElementById("total").value = suma;
}

const lista = document.getElementById("lista");
const mostrar = document.getElementById("mostrar");
const imagen = document.getElementById("imagen");

// Añade un evento al botón "Mostrar"
mostrar.addEventListener("click", () => {
    const opcionSeleccionada = lista.value;

    // Cambia la imagen según la selección
    switch (opcionSeleccionada) {
        case "carro":
            imagen.src = "https://i.pinimg.com/originals/b7/d1/0e/b7d10ec87405dc26cf546c0c59172243.jpg"; // Ruta de la imagen del carro
            imagen.alt = "Imagen de un carro";
            break;
        case "moto":
            imagen.src = "https://automagazine.ec/wp-content/uploads/2020/08/Motos-Haojue-China-en-Ecuador.jpg"; // Ruta de la imagen de la moto
            imagen.alt = "Imagen de una moto";
            break;
        case "bicicleta":
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3hM8ba4AtHFGcWrRaJ_vYYDOA4-r8I2HSA&s"; // Ruta de la imagen de la bicicleta
            imagen.alt = "Imagen de una bicicleta";
            break;
        default:
            imagen.src = "";
            break;
    }

    // Muestra la imagen si hay una selección válida
    if (imagen.src) {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
});