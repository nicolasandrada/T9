window.addEventListener('load', e=>{
    cargarStock()
})

//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    precioTotal()
})

/**
 * 1) Funcion para cargar el stock disponible
 */
function cargarStock(){
    //trae los objetos de la listas desplegables de cada producto
    let panales = document.getElementById('panales')
    let preservativos = document.getElementById('preservativos')
    let jabon = document.getElementById('jabon')
    let desodorante = document.getElementById('desodorante')
    let crema = document.getElementById('crema')

    //inserta la opcion 0 dentro de cada una de las listas
    panales.innerHTML=`<option>0</option>`
    preservativos.innerHTML=`<option>0</option>`
    jabon.innerHTML=`<option>0</option>`
    desodorante.innerHTML=`<option>0</option>`
    crema.innerHTML=`<option>0</option>`

    return excedente
}

/**
 * 2) Funcion para calcular el total del pedido
 */
function precioTotal(){
    //trae la opcion de la localidad seleccionada
    let barrio = document.getElementById('barrio').value

    //recorre la lista de productos y guarda los valores numericos en el arreglo "productos"
    let productos = []
    document.getElementsByName("prod[]").forEach(l => {
        productos.push(parseInt(l.value))
    })

    let total=0; 


    alert("El total del pedido es de: "+total)
}