//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
var slideIndex = 0;
showSlides();

function showSlides() {
  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000); // Change image every second , 2000 for 2 seconds , etc
}

function setAspectRatio(img, expected) {
    
	// No support for IE8 and lower
	if ( img.naturalWidth === 'undefined' ) return;
	
	// Get natural dimensions of image
	var width = img.naturalWidth;
	var height = img.naturalHeight;
	
	// Examine if width is larger than height then reduce the width but fix the height
	if ( width > height ) {
		img.style.width = (width / height * expected) + 'px';
		img.style.height = expected + 'px';
		
		// horizontally center the image
		img.style.transform = 'translatex(-' + parseInt((width / height * expected) - expected) + 'px)';
		img.style.webkitTransform = 'translateX(-' + parseInt((width / height * expected) - expected) + 'px)';
		return img;
	}
	
	// Examine if height is larger than width then reduce the height but fix the width
	else if ( height > width ) {
		img.style.width = expected + 'px';
		img.style.height = (height / width * expected) + 'px';
		
		// vertically center the image
		img.style.transform = 'translateY(-' + parseInt((height / width * expected) - expected) + 'px)';
		img.style.webkitTransform = 'translateY(-' + parseInt((height / width * expected) - expected) + 'px)';
		return img;
	}
	
	// Or return fix width and height
	else {
		img.style.width = expected + 'px';
		img.style.height = expected + 'px';
	}
}

 