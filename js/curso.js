// ACCORDION PAGE 

let acordeonB = document.getElementsByClassName("Programa__button");
let j;
console.log(acordeonB.length);

for (j = 0; j < acordeonB.length; j++) {
    acordeonB[j].onclick = function () {
        this.classList.toggle("activado");
        let contenido = this.nextElementSibling;
        console.log(this.nextElementSibling);

        if (contenido.style.maxHeight) {
            // console.log(" hay max height");
            // console.log(maxHeight + " max");

            contenido.style.maxHeight = null;
        } else {
            // console.log(" no hay max height");
            contenido.style.maxHeight = contenido.scrollHeight + "px";
        }
    }
}
document.getElementById("desplegado").click();
//scrollHeight es una medida de la altura del contenido de un elemento,
// incluido el contenido no visible en la pantalla debido al desbordamiento
console.log("hola");




// PAID CHEKBOXES Mercado Pago

const Precio = document.getElementsByClassName("precios")

function foo() {
    // var checkedValue = [];
    var count = 0
    var inputElements = document.getElementsByClassName('pagoCheckbox');
    var botones = document.getElementsByClassName('bot');
    for (var i = 0; i < inputElements.length; ++i) {
        botones[i].style.display = "none";
        if (inputElements[i].checked) {
            console.log(inputElements[i].checked);
            count = count + 1
        }
    }

    if (count == 1) {
        for (var i = 0; i < Precio.length; i++) {
            Precio[i].innerHTML = "$3315"
        }
        document.getElementById("test").style.display = "block";

    }
    else if (count == 2) {
        // else if (checkedValue.length == 2) {
        // D2.style.display = "none";
        // Precio.innerHTML = "$2730"
        for (var i = 0; i < Precio.length; i++) {
            Precio[i].innerHTML = "$2730"
        }
        // document.getElementById("test1").classList.toggle("newClassName");
        document.getElementById("test1").style.display = "block";
    }
    else if (count == 3) {
        // else if (checkedValue.length == 3) {
        // D3.style.display = "none";
        for (var i = 0; i < Precio.length; i++) {
            Precio[i].innerHTML = "$2145"
        }
        document.getElementById("test2").style.display = "block";
    } else {
        for (var i = 0; i < Precio.length; i++) {
            Precio[i].innerHTML = "$3900"
        } document.getElementById("test3").style.display = "block";
    }
}
// function foo() {
//     Modal.style.display = "none";
// }
document.getElementById("testt").click();




// PAID CHEKBOXES Paypal

const Precio_p = document.getElementsByClassName("precios_p")

function foo_p() {
    // var checkedValue = [];
    var count_p = 0
    var inputElements_p = document.getElementsByClassName('pagoCheckbox_p');
    var botones_p = document.getElementsByClassName('bot_p');
    for (var i = 0; i < inputElements_p.length; ++i) {
        botones_p[i].style.display = "none";
        if (inputElements_p[i].checked) {
            count_p = count_p + 1
        }
    }

    if (count_p == 1) {
        for (var i = 0; i < Precio_p.length; i++) {
            Precio_p[i].innerHTML = "U$D33"
        }
        document.getElementById("test_p").style.display = "block";

    }
    else if (count_p == 2) {
        for (var i = 0; i < Precio_p.length; i++) {
            Precio_p[i].innerHTML = "U$D27"
        }
        // document.getElementById("test1").classList.toggle("newClassName");
        document.getElementById("test1_p").style.display = "block";
    }
    else {
        for (var i = 0; i < Precio_p.length; i++) {
            Precio_p[i].innerHTML = "U$D39"
        } document.getElementById("test2_p").style.display = "block";
    }
}
// function foo() {
//     Modal.style.display = "none";
// }
document.getElementById("testt_p").click();




// MODAL


let Modal = document.getElementsByClassName("Modal")[0];

let btn = document.getElementsByClassName("opencontact")[0];

let btn2 = document.getElementsByClassName("opencontact2")[0];

let span = document.getElementsByClassName("Modal-close")[0];

btn.onclick = function () {
    console.log("onclick!!!!!!!!");
    Modal.style.display = "block";

}
btn2.onclick = function () {
    Modal.style.display = "block";
}

span.onclick = function () {
    Modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == Modal) {
        Modal.style.display = "none";
    }
}

