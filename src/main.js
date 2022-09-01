// Create variables targetting the relevant DOM elements here 👇

var randomCoverButton = document.querySelector(".random-cover-button")
// var bookCover = document.querySelector();
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTagLine1 = document.querySelector(".tagline-1");
var coverTagLine2 = document.querySelector(".tagline-2");
// var priceTag = document.querySelector(".price-tag");
// var overlay = document.querySelector(".overlay");
// var descriptor1 = document.querySelector(".descriptor1");
// var descriptor2 = document.querySelector(".descriptor2");

// When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors
// Every time the user clicks the Show New Random Cover button, a new random cover is created
// build a randomizer

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇

window.addEventListener("load", showRandom);
randomCoverButton.addEventListener("click", showRandom);

// Create your event handlers and other functions here 👇

function showRandom() {
    var newCover = covers[getRandomIndex(covers)];
    var newTitle = titles[getRandomIndex(titles)];
    var newCoverTagLine1 = descriptors[getRandomIndex(descriptors)];
    var newCoverTagLine2 = descriptors[getRandomIndex(descriptors)];

coverImage.src = newCover;
coverTitle.innerText = newTitle;
coverTagLine1.innerText = newCoverTagLine1;
coverTagLine2.innerText = newCoverTagLine2;
}
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// function logClick() {
//   console.log("button was clicked")
