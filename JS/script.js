var  acc = document.getElementsByClassName("accord");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const btn = document.getElementById('btnbtn')
btn.onclick = function(){
    console.log('button has been clicked')
   alert("Book Now");
}


const btn2 = document.getElementById('btnbtn2')
btn2.onclick = function(){
    console.log('button has been clicked')
  alert("Call (000)-000-000-000");
}

const btn3 = document.getElementById('read1')
btn3.onclick = function(){
    console.log('button has been clicked')
  alert("Click here to read more");
}

const btn4 = document.getElementById('read2')
btn4.onclick = function(){
    console.log('button has been clicked')
  alert("Scroll to next section");
}

const btn5 = document.getElementById('sub')
btn5.onclick = function(){
    console.log('button has been clicked')
  alert("proceed to next page");
}
