// Gallery

var slideIndex = 1;
showSlides(slideIndex);

function thumbnail(t){
  slideIndex = t;
  showSlides(slideIndex);
}

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

// Thumbnails

var tIndex = 2;

function nextThumb(x) {
  currentThumb(tIndex += x);
}

function currentThumb(x){
  if(x > 2){
    tIndex = 1;
  } else if (x < 1) {
    tIndex = 2;
  }
  changeThumb(tIndex);
}

function changeThumb(x){
  if(x == 1){
    document.getElementById("T1").style.display = "none";
    document.getElementById("T2").style.display = "table";
  } else {
    document.getElementById("T1").style.display = "table";
    document.getElementById("T2").style.display = "none";
  }
}

// Tickets hover

var wrapper = document.getElementById("tix-wrapper");

function onHoverNY(){
  wrapper.style.backgroundImage = "url(media/max.jpg)";
}

function onHoverS(){
  wrapper.style.backgroundImage = "url(media/seattlenight.jpg)";
}
function onHoverBuc(){
  wrapper.style.backgroundImage = "url(media/bucnight.jpg)";
}
