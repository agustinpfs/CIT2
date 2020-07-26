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

