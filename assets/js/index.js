const precio = 15000;

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function actualizarTotal() {
    const cantidad = document.querySelector(".cantidad");
    const cuenta = Number(cantidad.innerHTML); 
    const valorTotal = cuenta * precio; 
    const valorTotalSpan = document.querySelector(".valor-total");
    valorTotalSpan.innerHTML = valorTotal;
}

function suma() 
{
const cantidad = document.querySelector(".cantidad");
let cuenta = Number(cantidad.innerHTML);
cuenta = cuenta + 1;
cantidad.innerHTML = cuenta;
actualizarTotal();
}

function resta() 
{
cantidad = document.querySelector(".cantidad");
cuenta = Number(cantidad.innerHTML);
    if (cuenta > 0) {
    cuenta = cuenta - 1;
}
cantidad.innerHTML = cuenta;
actualizarTotal();
}

actualizarTotal();









