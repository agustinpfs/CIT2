// ACCORDION



let acordeonButtons = document.getElementsByClassName("Acordeon-button");
let i;

for (i = 0; i < acordeonButtons.length; i++) {
  acordeonButtons[i].onclick = function() {
    this.classList.toggle("activo");
    let contenido = this.nextElementSibling;
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
document.getElementById("activado").click();



  




// SLIDER

var slideIndex = 1; //arranca(1)
showSlides(slideIndex); //arranca(1)

function plusSlides(n) {
  showSlides(slideIndex += n);
}    



function showSlides(n) { //entra (1)(2)
  console.log(n + " n")
  
  var i;
  var slides = document.getElementsByClassName("Slide__js"); //retorna array de los divs que tengan esta clase
  //   var dots = document.getElementsByClassName("dot");  
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    console.log(i + " i")  
    
    slides[i].style.display = "none";  
  }        
  //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");    
    //   }
    console.log(slideIndex + " slideIndex")
    
    slides[slideIndex-1].style.display = "block"; 
    console.log(slideIndex-1 + " tiene que ser cero!!") 
    // dots[slideIndex-1].className += " active";
  }    
  
  
  
// TABS

document.getElementById("defaultActive").click();

  function showContent(evento, contenidoDeUnTab) {

    var i, todosLosContenidos, tab_button;
  
    todosLosContenidos = document.getElementsByClassName("Tabs__tab-content");
    for (i = 0; i < todosLosContenidos.length; i++) {
        todosLosContenidos[i].style.display = "none";
    }    
  
    tab_button = document.getElementsByClassName("Tabs__tab");
    for (i = 0; i < tab_button.length; i++) {
      tab_button[i].className = tab_button[i].className.replace(" active", "");
    }    
  
    document.getElementById(contenidoDeUnTab).style.display = "block";
    evento.target.className += " active";
  
  // event.target identifica el elemento en el que se ha producido el evento.  
  
  }
  
// MODAL


let Modal = document.getElementsByClassName("Modal")[0];

let btn = document.getElementsByClassName("opencontact")[0];

let btn2 = document.getElementsByClassName("opencontact2")[0];

let span = document.getElementsByClassName("Modal-close")[0];

btn.onclick = function() {
  console.log("onclick!!!!!!!!");
    Modal.style.display = "block";
    
}
btn2.onclick = function() {
    Modal.style.display = "block";
}

span.onclick = function() {
    Modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == Modal) {
        Modal.style.display = "none";
    }
}

