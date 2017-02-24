
// /////////////////////////////
// slideshow am beginn der seite
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(n);
}

function showSlides(n) {
  var i;
  var active = " active";
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  slideIndex = n;
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(active, "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += active;
}
// /////////////////////////////

// /////////////////////////////
// modal images
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
// /////////////////////////////


// /////////////////////////////
// modal fuer kontakt + impressum
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// /////////////////////////////

// /////////////////////////////
// modal fuer galerie
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function onClick(element) {
	var src = element.src;
	var dot = src.lastIndexOf(".");
	var tmp = src.substr(0, dot);
	src = tmp + '_.jpg';
	document.getElementById("img01").src = src;
	document.getElementById("modal01").style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	modal = document.getElementById('impressum');
	if( modal == null ) {
		modal = document.getElementById('kontakt');
	}
	if( modal== null ) {
		return;
	}
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// /////////////////////////////


// /////////////////////////////
// navigation
function w3_openSideNav() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("burger_nav").style.display = "none";
    document.getElementById("none_burger_nav").style.display = "block";
}
function w3_closeSideNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("burger_nav").style.display = "block";
    document.getElementById("none_burger_nav").style.display = "none";
}
// /////////////////////////////

// /////////////////////////////
// viedschos

function playVideo(element) {
var player = element.childNodes[1];
element.addEventListener(
	'click'
	, function() {
		if( player.paused ) {
			player.play();
		}
		else {
			player.pause();
		}
	}
	, false
	);
}
// /////////////////////////////







