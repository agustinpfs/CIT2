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

document.getElementById("defaultOpen").click();

  
  function showContent(evento, contenidoDeUnTab) {
    console.log(evento + "event che");
    console.log(contenidoDeUnTab + " CcontenidoDeUnTab che");
    
    // Declare all variables
    var i, todosLosContenidos, tab_button;
  
    // Get all elements with class="todosLosContenidos" and hide them
    todosLosContenidos = document.getElementsByClassName("Aside__tabContent");
    for (i = 0; i < todosLosContenidos.length; i++) {
        todosLosContenidos[i].style.display = "none";
    }    
  
    // Get all elements with class="Aside__tab" and remove the class "active"
    tab_button = document.getElementsByClassName("Aside__tab");
    for (i = 0; i < tab_button.length; i++) {
      tab_button[i].className = tab_button[i].className.replace(" active", "");
    }    
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(contenidoDeUnTab).style.display = "block";
    evento.target.className += " active";
  
  // event.target identifica el elemento en el que se ha producido el evento(red).  
  
  
  }
  
  
