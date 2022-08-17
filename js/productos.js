const IVA = 1.21
const productos = ['miel de 100gr', 'miel de 500gr', 'miel de 1000gr', 'miel de 1500gr']
//                        100              500              1000             1500
const selectProducto = document.querySelector("select")
debugger
function arrayProductos() {
    productos.forEach(producto => {
            selectProducto.innerHTML += `<option value="">${producto}</option>`
        }

    )
}
arrayProductos()