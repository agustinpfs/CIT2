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




// PAID CHEKBOXES 



// const Precio = document.getElementById("precios");
// const Precio = document.querySelectorAll(".precios");
const Precio = document.getElementsByClassName("precios")
// const D1  =document.getElementsByClassName("desc1")[0];
// const D2 = document.getElementsByClassName("desc2")[0];
// const D3 = document.getElementsByClassName("desc3")[0];

function foo() {
    // var checkedValue = [];
    var count = 0
    var inputElements = document.getElementsByClassName('pagoCheckbox');
    var botones = document.getElementsByClassName('bot');
    // for (var i = 0; inputElements[i]; ++i) {
    for (var i = 0; i < inputElements.length; ++i) {
        botones[i].style.display = "none";
        if (inputElements[i].checked) {
            console.log(inputElements[i].checked);
            // checkedValue.push(inputElements[i].value)
            count = count + 1
            // console.log(count);
            
            // checkedValue.push(inputElements[i].value)
            // break;
        }
    }
    // if (count = 1 == true) {
    //     console.log();
        
    //     Precio.innerHTML = "Precio: $1200"
    // }
    // else if (count = 2 == true)  {
    //     Precio.innerHTML = "Precio: $800"
    //     console.log(count + "aca");
    // }
    // else if (count = 3 == true) {
    //     Precio.innerHTML = "Precio: $200"
    //     console.log(count + "aca3");
    // }

    if (count == 1) {
    // if (checkedValue.length == 1) {
        // D1.style.display = "none";
        
  for (var i = 0; i < Precio.length; i++) {
    Precio[i].innerHTML = "$1200"
  }
        document.getElementById("test").style.display = "block";
        
    }
    else if (count == 2) {
    // else if (checkedValue.length == 2) {
        // D2.style.display = "none";
        // Precio.innerHTML = "$800"
        for (var i = 0; i < Precio.length; i++) {
            Precio[i].innerHTML = "$800"
          }
        // document.getElementById("test1").classList.toggle("newClassName");
        document.getElementById("test1").style.display = "block";
    }
    else if (count == 3) {
    // else if (checkedValue.length == 3) {
        // D3.style.display = "none";
        for (var i = 0; i < Precio.length; i++) {
            Precio[i].innerHTML = "$300"
          }        
          document.getElementById("test2").style.display = "block";
    }else {
        for (var i = 0; i < Precio.length; i++) {
            Precio[i].innerHTML = "$2700"
          }        document.getElementById("test3").style.display = "block";
    }
}
                    // function foo() {
                    //     Modal.style.display = "none";
                    // }
document.getElementById("testt").click();

