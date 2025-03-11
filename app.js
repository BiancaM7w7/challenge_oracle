// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];

function agregarAmigo() {
    var inputAmigo = document.getElementById('amigo');
    var amigoNombre = inputAmigo.value.trim().toUpperCase();  // Convertir a mayúsculas y eliminar espacios extra

    if (amigoNombre === "") {
        alert("Por favor, ingresa un nmbre valido");
        return;
    }

    var patron = /^[a-zA-Z\s]+$/; //regex
    if (!patron.test(amigoNombre)) {
        alert("El nombre solo puede contener ltras y espacios");
        return;
    }
    amigos.push(amigoNombre);

    inputAmigo.value = "";

    mostrarAmigos();
}

function mostrarAmigos() {
    var listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear :( .");
        return;
    }

    var amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    var resultado = document.getElementById('resultado');
    resultado.textContent = "Amigo sorteado:) " + amigoSorteado;
}
