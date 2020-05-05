// ACCORDION PAGE 

let acordeonB = document.getElementsByClassName("Programa__button");
let j;
console.log(acordeonB.length);

for (j = 0; j < acordeonB.length; j++) {
    acordeonB[j].onclick = function() {
        this.classList.toggle("activado");
        let contenido = this.nextElementSibling;
        console.log(this.nextElementSibling);
        
        if (contenido.style.maxHeight){
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