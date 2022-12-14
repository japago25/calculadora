const displayValor = document.getElementById('valor');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValor);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});


const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora');

var today = new Date();
 
fecha.textContent = today.toLocaleDateString();
hora.textContent = today.toLocaleTimeString();


