/*******ARRAY DE MECATOS ***************/

var mecatos = [
    {
        id: 'A01',
        producto: "Papitas de Mayonesa",
        urlImage: "./assets/imgs/papas_mayonesa.png",
        precio: 2500,
        cantidad: 12,
        seAcabo: false
    },
    {
        id: 'A02',
        producto: "Detodito de limón",
        urlImage: "./assets/imgs/detodito_limon.webp",
        precio: 3400,
        cantidad: 12,
        seAcabo: false
    },
    {
        id: 'A03',
        producto: "Arequipe pequeño",
        urlImage: "./assets/imgs/arequipe_alpina.webp",
        precio: 5600,
        cantidad: 12,
        seAcabo: false
    },
    {
        id: 'B04',
        producto: "Arequipe grande",
        urlImage: "./assets/imgs/arequipe_grande_alpina.jpg",
        precio: 7600,
        cantidad: 12,
        seAcabo: false
    },
    {
        id: 'B05',
        producto: "Chocorramo",
        urlImage: "./assets/imgs/chocorramo.webp",
        precio: 3200,
        cantidad: 12,
        seAcabo: false
    },
    {
        id: 'B06',
        producto: "Galletas Festival",
        urlImage: "./assets/imgs/galletas_festival.webp",
        precio: 900,
        cantidad: 30,
        seAcabo: false
    },
    {
        id: 'B07',
        producto: "Nucita",
        urlImage: "./assets/imgs/nucita.webp",
        precio: 750,
        cantidad: 20,
        seAcabo: false
    },
    {
        id: 'C08',
        producto: "Minichips",
        urlImage: "./assets/imgs/minichips.jpg",
        precio: 1600,
        cantidad: 30,
        seAcabo: false
    },
    {
        id: 'C09',
        producto: "Papitas de pollo",
        urlImage: "./assets/imgs/papas_pollo.png",
        precio: 3500,
        cantidad: 10,
        seAcabo: false
    },
    {
        id: 'C10',
        producto: "Platanitos de Limón",
        urlImage: "./assets/imgs/platanitos.jpg",
        precio: 3500,
        cantidad: 12,
        seAcabo: false
    },
    {
        id: 'C11',
        producto: "Cocacola en lata",
        urlImage: "./assets/imgs/cocacola_lata.jpg",
        precio: 1500,
        cantidad: 20,
        seAcabo: false
    },
    {
        id: 'C12',
        producto: "Pepsi botella",
        urlImage: "./assets/imgs/pepsi.webp",
        precio: 1500,
        cantidad: 12,
        seAcabo: false
    },
    {
        id: 'C13',
        producto: "Gaseosa Manzana",
        urlImage: "./assets/imgs/manzana_gaseosa.webp",
        precio: 2500,
        cantidad: 12,
        seAcabo: false
    },
    {
        id: 'C14',
        producto: "Gaseosa Colombiana",
        urlImage: "./assets/imgs/colombiana.webp",
        precio: 1500,
        cantidad: 12,
        seAcabo: false
    },


]
window.onload = function () { //Acciones tras cargar la p&aacute;gina
    cargarMecatos();
    pantalla = document.getElementById("textoPantalla"); //elemento pantalla de salida
    document.onkeydown = teclado; //funci&oacute;n teclado disponible
}
x = "0"; //n&uacute;mero en pantalla
xi = 1; //iniciar n&uacute;mero en pantalla: 1=si; 0=no;
coma = 0; //estado coma decimal 0=no, 1=si;
ni = 0; //n&uacute;mero oculto o en espera.
op = "no"; //operaci&oacute;n en curso; "no" =  sin operaci&oacute;n.
var ArrayPorductosComprados = [];
var productoElegidoObject = {};

//mostrar n&uacute;mero en pantalla seg&uacute;n se va escribiendo:
function numero(xx) { //recoge el n&uacute;mero pulsado en el argumento.
    if (x == "0" || xi == 1) {	// inicializar un n&uacute;mero, 
        pantalla.innerHTML = xx; //mostrar en pantalla
        x = xx; //guardar n&uacute;mero
        if (xx == ".") { //si escribimos una coma al principio del n&uacute;mero
            pantalla.innerHTML = "0."; //escribimos 0.
            x = xx; //guardar n&uacute;mero
            coma = 1; //cambiar estado de la coma
        }
    }
    else { //continuar escribiendo un n&uacute;mero
        if (xx == "." && coma == 0) { //si escribimos una coma decimal pòr primera vez
            pantalla.innerHTML += xx;
            x += xx;
            coma = 1; //cambiar el estado de la coma  
        }
        //si intentamos escribir una segunda coma decimal no realiza ninguna acci&oacute;n.
        else if (xx == "." && coma == 1) { }
        //Resto de casos: escribir un n&uacute;mero del 0 al 9: 	 
        else {
            pantalla.innerHTML += xx;
            x += xx
        }
    }
    xi = 0 //el n&uacute;mero est&aacute; iniciado y podemos ampliarlo.
}

function borradoParcial() {
    pantalla.innerHTML = 0; //Borrado de pantalla;
    x = 0;//Borrado indicador n&uacute;mero pantalla.
    coma = 0;	//reiniciamos tambi&eacute;n la coma				
}


function cargarMecatos() {
    console.log(mecatos);
    mecatos.forEach(mecato => {
        var caja = document.getElementById('boxMecato');
        var infoProducto = document.createElement('div');
        var card = document.createElement('div');
        var imgProducto = document.createElement('img');
        var precioProducto = document.createElement('label');
        var cantidadProducto = document.createElement('span');
        var codigoProducto = document.createElement('span');
        var nombreProducto = document.createElement('label');
        var hayExistencias = document.createElement('label');

        imgProducto.src = mecato.urlImage;
        codigoProducto.textContent = mecato.id;
        precioProducto.textContent = mecato.precio;
        nombreProducto.textContent = mecato.producto;
        cantidadProducto.textContent = mecato.cantidad;
        hayExistencias.textContent = mecato.seAcabo;

        card.classList.add('box_producto');
        card.setAttribute('id', 'producto' + mecato.id);
        card.setAttribute('onclick', "obtenerInformacionDelProductoSeleccionado(producto" + mecato.id + ");");
        imgProducto.classList.add('img_mecato');
        precioProducto.classList.add('precio_producto');
        codigoProducto.classList.add('codigo_producto');
        cantidadProducto.classList.add('cantidad_producto');
        nombreProducto.classList.add('nombre_producto');
        if (mecato.cantidad == 0) {
            hayExistencias.classList.add('se_acabo');
        } else {
            hayExistencias.classList.add('no_se_acabo');
        }
        infoProducto.classList.add('info_producto');


        card.appendChild(imgProducto);
        infoProducto.appendChild(codigoProducto);
        infoProducto.appendChild(precioProducto);
        infoProducto.appendChild(cantidadProducto);
        infoProducto.appendChild(hayExistencias);
        infoProducto.appendChild(nombreProducto);
        caja.appendChild(card);
        card.appendChild(infoProducto);
    });


}

function recibirDinero() {
    var inputMoney = document.getElementById('inputMoney');
    var valueMoney = inputMoney.value;
}

function obtenerInformacionDelProductoSeleccionado(producto) {
    var textoGeneral = producto.innerText;
    var ArrayValues = textoGeneral.split("\n");
    var inputAuxMoney = document.getElementById('precio_producto_elegido');
    inputAuxMoney.value = ArrayValues[1];
    crearRecibo(producto.innerText.split("\n"));
}

function comprar() {
    var dineroIngresado = document.getElementById('textoPantalla').innerText;
    var inputAuxMoneyIngresado = document.getElementById('valor_dinero_ingresado');
    inputAuxMoneyIngresado.value = dineroIngresado;
    validarCompra();
}

function validarCompra() {
    var precioProducto = document.getElementById('precio_producto_elegido').value;
    var precioIngresado = document.getElementById('valor_dinero_ingresado').value;
    if (Number(precioIngresado) < Number(precioProducto)) {
        alert("No tienes saldo suficiente");
    } else {
        mostrarRecibo();
    }
}

function crearRecibo(productoElegido) {
    //var fila = document.getElementById('fila');
    productoElegidoObject = {
        Nombre: productoElegido[4],
        codigo: productoElegido[0],
        precio: productoElegido[1],
        cantidad: 1
    }
    ArrayPorductosComprados.push(productoElegidoObject);
}

function mostrarRecibo() {
    var recibo = document.getElementById('boxRecibo');
    ArrayPorductosComprados.forEach(producto => {
        var codigoPorductoElegido = document.createElement('label');
        var nombreProductoElegido = document.createElement('label');
        var precioProductoElegido = document.createElement('label');
        var cajaData = document.createElement('div');

        codigoPorductoElegido.textContent =  producto.codigo;
        nombreProductoElegido.textContent = producto.Nombre;
        precioProductoElegido.textContent = producto.precio;

        codigoPorductoElegido.classList.add('id_producto');
        nombreProductoElegido.classList.add('producto_elegido');
        precioProductoElegido.classList.add('precio_producto');
        cajaData.classList.add('fila');

        cajaData.appendChild(codigoPorductoElegido);
        cajaData.appendChild(nombreProductoElegido);
        cajaData.appendChild(precioProductoElegido);

        recibo.appendChild(cajaData);

    });
}