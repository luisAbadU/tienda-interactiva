function init() {
    var productos = document.getElementById("productos");
    productos = productos.innerHTML =
    `
    <div>
        <label>producto A</label>
        <input type="number" name="" id="cantidad" min="1">
        <button type="button" class="btn btn-primary" onclick="carrito()">Agregar</button>
    </div>`;

}

function carrito(){
    let card = document.getElementById("card");
    let cantidad = document.getElementById("cantidad").value;

    card.innerHTML=
    `
    <div>
        <h6>cantidad: ${cantidad}</h6>
    </div>

    `
    alert("producto agregado")
}