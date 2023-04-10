const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const slide = slides.querySelectorAll('.slide');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

let currentIndex = 0;
let slideWidth = slide[0].clientWidth;

slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

function updateButtons() {
  if (currentIndex === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (currentIndex === slide.length - 1) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}


prevButton.addEventListener('click', () => {
  currentIndex--;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  updateButtons();
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  updateButtons();
});

function scrollToSection() {
  var section = document.getElementById("target-section");
  section.scrollIntoView({behavior: "smooth"});
}


updateButtons();
function showInfo(infoId) {
  var info = document.getElementById(infoId);
  info.style.display = "block";
}

function hideInfo(infoId) {
  var info = document.getElementById(infoId);
  info.style.display = "none";
}
// Get the tour button and popup window
var tourButton = document.getElementById("tour-button");
var tourPopup = document.getElementById("tour-popup");

// Get the close button and add event listener to close the popup window
var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function() {
  tourPopup.style.display = "none";
});

// Add event listener to tour button to open popup window
tourButton.addEventListener("click", function() {
  tourPopup.style.display = "block";
});
function toggleWindow() {
  var window = document.getElementById("window");
  if (window.style.display === "none") {
    window.style.display = "block";
  } else {
    window.style.display = "none";
  }
}
const centerWindow = document.getElementById('center-window');
const openWindowButton = document.getElementById('open-window-button');
openWindowButton.addEventListener('click', () => {
  window.open( '_blank', 'width=800,height=600');
});
function shwoModal() {
  var window = document.getElementById("window");
  if (window.style.display === "none") {
    window.style.display = "block";
  } else {
    window.style.display = "none";
  }
}
const destination = document.getElementById("destination");
const Price = document.getElementById("price");

destination.addEventListener("change", function() {
  const selectedOption = destination.value;

  let price = 0;

  if (selectedOption === "japa") {
    price = 1000;
  } else if (selectedOption === "russia") {
    price = 1200;
  } else if (selectedOption === "tokyo") {
    price = 1500;
  }

  tourPrice.innerHTML = "$" + price;
});
//const gallery = document.querySelector('.gallery');
//const viewMoreBtn = document.querySelector('.view-more-btn');
//const photos = [
//  'img/tir2.jpg',
//  'img/tir2.jpg',
//  'img/tir2.jpg',
//  'img/tir2.jpg',
//  'img/tir2.jpg',
//  'img/tir2.jpg',
//];
//
//// Hide all photos except the first 9
//const galleryImgs = gallery.querySelectorAll('.gallery-img');
//for (let i = 9; i < galleryImgs.length; i++) {
//  galleryImgs[i].style.display = 'none';
//}

//// Add event listener to view more button
//viewMoreBtn.addEventListener('click', () => {
//  // Loop through all hidden photos and display them
//  for (let i = 9; i < galleryImgs.length; i++) {
//    galleryImgs[i].style.display = 'block';
//  }

//  // Remove the view more button
//  viewMoreBtn.style.display = 'none';
//
//  // Create a new page with the entire photo library
//  const photoLibrary = document.createElement('div');
//  photoLibrary.classList.add('photo-library');
//  photos.forEach(photo => {
//    const img = document.createElement('img');
// //   img.src = photo;
//    img.classList.add('photo');
//   photoLibrary.appendChild(img);
//  });
//  document.body.appendChild(photoLibrary);
//
//  // Add event listeners to photos to enlarge them
//  const photoImgs = photoLibrary.querySelectorAll('.photo');
//  photoImgs.forEach(photoImg => {
//    photoImg.addEventListener('click', () => {
//      photoImg.classList.toggle

function enlargeImage(img) {
  // Create a new element to display the enlarged image
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
  overlay.style.zIndex = 9999;
  overlay.onclick = function() {
    document.body.removeChild(overlay);
  };
  
  // Create a new element for the enlarged image
  var enlargedImg = document.createElement("img");
  enlargedImg.src = img.src;
  enlargedImg.style.position = "absolute";
  enlargedImg.style.top = "50%";
  enlargedImg.style.left = "50%";
  enlargedImg.style.transform = "translate(-50%,-50%)";
  enlargedImg.style.maxHeight = "90%";
  enlargedImg.style.maxWidth = "90%";
  
  // Add the elements to the document
  overlay.appendChild(enlargedImg);
  document.body.appendChild(overlay);
}
// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
