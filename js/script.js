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