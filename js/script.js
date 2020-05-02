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

  
  function openItem(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("Aside__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }    
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }    
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.target.className += " active";
  
  // event.target identifica el elemento en el que se ha producido el evento(red).  
  
  
  }
  
  
