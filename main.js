const person1 = new Person(data[0]);
const person2 = new Person(data[1]);
console.log(person1);
console.log(person2);

// Query Selectors
const leftBackgroundImg = document.querySelector(".left-section");
const rightBackgroundImg = document.querySelector(".right-section");
const personName1 = document.querySelector(".left-heading");
const personName2 = document.querySelector(".right-heading");
const person1Followers = document.querySelector(".left-sub-heading");

const higherBtn = document.querySelector(".higher-btn");
const lowerBtn = document.querySelector(".lower-btn");
const vsLogo = document.querySelector(".vs-logo");

// Event Listeners
higherBtn.addEventListener("click", getHigherEvent);
lowerBtn.addEventListener("click", getLowerEvent);

// Global Variables
let currentPerson1;
let currentPerson2;

// Functions
currentPerson1 = data[0];

// Start Of Game

// Get First Person
personName1.innerText = currentPerson1.name;
person1Followers.innerText = currentPerson1.followers.toLocaleString("en-US");
leftBackgroundImg.style.background = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
url('${currentPerson1.img}') no-repeat center center/cover`;

// Get Second Person
function getSecondPerson() {
  currentPerson2 = data[1];
  personName2.innerText = currentPerson2.name;
  rightBackgroundImg.style.background = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
  url('${currentPerson2.img}') no-repeat center center/cover`;
  console.log("Random:", currentPerson2);
}
getSecondPerson();

// Check which is higher
function getHigherEvent() {
  if (currentPerson2.followers > currentPerson1.followers) {
    console.log(true);
    vsLogo.style.background = "green";
  } else {
    console.log(false);
    vsLogo.style.background = "red";
    alert("Game Over");
  }
}

function getLowerEvent() {
  if (currentPerson2.followers < currentPerson1.followers) {
    console.log(true);
    vsLogo.style.background = "green";
    currentPerson1 = currentPerson2;
    console.log("Next Person:", currentPerson1);
    personName1.innerText = currentPerson1.name;
    person1Followers.innerText =
      currentPerson1.followers.toLocaleString("en-US");
    leftBackgroundImg.style.background = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url('${currentPerson1.img}') no-repeat center center/cover`;
    getNextPerson()
  } else {
    console.log(false);
    alert("Game Over");
    vsLogo.style.background = "red";
  }
}

function getNextPerson() {
  let newIndex = Math.floor(Math.random() * data.length) + 1;
  let nextPerson = data[newIndex];
  currentPerson2 = nextPerson;
  console.log(currentPerson2);
  personName2.innerText = currentPerson2.name;
  rightBackgroundImg.style.background = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
  url('${currentPerson2.img}') no-repeat center center/cover`;
}

// getNextPerson();
