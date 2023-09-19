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
menuButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    menuButtons.forEach((item) => {
      console.log(item.getAttribute("data-active"));
      if (item.getAttribute("data-active") == "true") {
        item.setAttribute("data-active", "false");
      }
    });
    item.setAttribute("data-active", "true");
  });
});
