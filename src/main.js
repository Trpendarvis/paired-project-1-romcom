// Create variables targetting the relevant DOM elements here 👇

var controls = document.querySelector(".controls");
var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var mainCover = document.querySelector(".main-cover");
var homeView = document.querySelector(".home-view");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTagLine1 = document.querySelector(".tagline-1");
var coverTagLine2 = document.querySelector(".tagline-2");
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var userDescription1 = document.querySelector(".user-desc1");
var userDescription2 = document.querySelector(".user-desc2");
var priceTag = document.querySelector(".price-tag");
var overlay = document.querySelector(".overlay");
var savedView = document.querySelector(".saved-view");
var savedCovers = document.querySelector(".saved-covers-select");
var form = document.querySelector(".form-view");
var customCoverButton = document.querySelector(".create-new-book-button");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇

window.addEventListener("load", showRandom);
randomCoverButton.addEventListener("click", showRandom);
makeYourOwnCoverButton.addEventListener("click", displayForm);
homeButton.addEventListener("click", displayHome);
viewSavedButton.addEventListener("click", displaySavedCovers);
//needs to build fuction for saveCoverButton

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
};


function displayForm() {
  homeView.classList.add("hidden");
  form.classList.remove("hidden");
  makeYourOwnCoverButton.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  viewSavedButton.classList.add("hidden");
  homeButton.classList.remove("hidden")
};

function displayHome() {
  homeView.classList.remove("hidden");
  form.classList.add("hidden");
  makeYourOwnCoverButton.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  viewSavedButton.classList.remove("hidden");
  homeButton.classList.add("hidden")
};

function displaySavedCovers() {
  homeView.classList.add("hidden");
  savedView.classList.add("hidden");
  makeYourOwnCoverButton.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  viewSavedButton.classList.remove("hidden");
  homeButton.classList.remove("hidden")
};

    // var userCover = covers[getRandomIndex(covers)];
    // var newTitle = titles[getRandomIndex(titles)];
    // var userDescription1 = descriptors[getRandomIndex(descriptors)];
    // var userDescription2 = descriptors[getRandomIndex(descriptors)];
//we need to make a new function that will allow the make your own cover button work
// and will displayForm for user to use

  // userCover.src = newCover;
  // userTitle.classList = newTitle;
  // userDescription1.classList = newUserDescription1;
  // userDescription2.classList = newUserDescription2;


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// function logClick() {
//   console.log("button was clicked")
