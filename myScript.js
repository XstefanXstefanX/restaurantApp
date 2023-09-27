// NavBar Change Handler
let navbar = document.getElementById("main-nav");
window.onscroll = function () {
  if (window.pageYOffset > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
// Welcome Page Word Change Handler

const word = document.getElementById("changing-text");
const words = [
  "Family",
  "Friends",
  "Colleagues",
  "Tonight",
  "Loved Ones",
  "Buddies",
];

// Word Delete /  Type Effect Handler

setInterval(() => {
  let i = 0;
  let currWord = words[Math.floor(Math.random() * words.length)].split("");
  let len = currWord.length - 1;
  if (word.innerHTML === "") {
    const myInterval = setInterval(fillWord, 150);
    function fillWord() {
      word.innerHTML += currWord[i];
      i++;
      if (i > len) {
        clearInterval(myInterval);
      }
    }
  } else {
    const myInterval = setInterval(removeWord, 150);
    function removeWord() {
      word.innerHTML = word.innerHTML.slice(0, word.innerHTML.length - 1);
      if (word.innerHTML.length == 0) {
        clearInterval(myInterval);
      }
    }
  }
}, 3500);

// Flicker Effect
let wordAfter = window.getComputedStyle(word, "::after");
setInterval(() => {
  let color = wordAfter.getPropertyValue("background-color");
  if (color === "rgb(255, 255, 255)") {
    word.style.setProperty("--changing-text-color", "transparent");
  } else {
    word.style.setProperty("--changing-text-color", "white");
  }
}, 400);

// Our Menu Selector

const menuButtons = document.querySelectorAll(".menu-nav-item");
const menuSlides = document.querySelectorAll(".menu-details");

menuButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    menuButtons.forEach((item, index) => {
      if (item.getAttribute("data-active") == "true") {
        item.setAttribute("data-active", "false");
        menuButtons[index].setAttribute("data-active", "false");
      }
    });
    item.setAttribute("data-active", "true");
  });
});

menuButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(index);
    menuButtons.forEach((item, index) => {
      menuSlides[index].setAttribute("data-active", "false");
    });
    console.log(menuSlides[index].getAttribute("data-active"));
    if (menuSlides[index].getAttribute("data-active") == "false") {
      menuSlides[index].setAttribute("data-active", "true");
    }
  });
});

// Tablet Mode NavBar Show/Hide

document
  .querySelector(".nav-hamburger-button")
  .addEventListener("click", () => {
    document.querySelectorAll("#nav-item").forEach((item) => {
      console.log(item.style.display);
      item.style.display == "none" ? "block" : "none";
      console.log(item.style.display);
    });
  });
