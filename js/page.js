// ACCORDION PAGE 

let acordeonB = document.getElementsByClassName("Acordeon-page");
let j;
console.log(acordeonB.length);

for (j = 0; j < acordeonB.length; j++) {
  acordeonB[j].onclick = function() {
    this.classList.toggle("act");
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
//scrollHeight es una medida de la altura del contenido de un elemento,
// incluido el contenido no visible en la pantalla debido al desbordamiento
document.getElementById("activ").click();
console.log("hola");