let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
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



function check() {
  
    var inp1 = document.getElementById('message'),
  
        inp2 = document.getElementById('calendar'),
  
        inp3 = document.getElementById('email'),

        inp4 = document.getElementById('name');

  
    document.getElementById('button').disabled = inp1.value && inp2.value && inp3.value && inp4.value ? false : "disabled";
  
  }
  