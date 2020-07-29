const body = document.querySelector("body");
const image = document.querySelector(".image");
const main = document.querySelector(".main");
const button = document.querySelector(".main__push-button");
const headline = document.querySelector(".main__headline");
const link = document.querySelector(".main__link");

// Init styles
const setImageSize = () => {
  image.style.height = `${window.innerHeight - main.offsetHeight - 42}px`;
  image.style.width = "auto";
  if (image.offsetWidth >= window.innerWidth - 42) {
    image.style.width = "100vw";
    image.style.height = "auto";
    button.style.width = `${image.offsetWidth}px`;
    button.style.height = `${image.offsetWidth / 6}px`;
  }
  button.style.width = `${image.offsetWidth}px`;
  button.style.height = `${image.offsetWidth / 6}px`;
};

setTimeout(setImageSize, 0);

// Resize styles

window.addEventListener("resize", setImageSize);

// Ripple effect
button.addEventListener("click", (e) => {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  let ripples = document.createElement("span");
  ripples.classList.add("ripples");
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";

  button.appendChild(ripples);

  setTimeout(() => {
    ripples.remove();
  }, 1000);
});

//Dark theme switcher
let isDarkTheme = false;
const switchTheme = () => {
  if (!isDarkTheme) {
    body.classList.add("dark-theme");
    button.classList.add("main__push-button--dark");
    headline.classList.add("main__headline--dark");
    link.classList.add("main__link--dark");
    isDarkTheme = !isDarkTheme;
  } else {
    body.classList.remove("dark-theme");
    button.classList.remove("main__push-button--dark");
    headline.classList.remove("main__headline--dark");
    link.classList.remove("main__link--dark");
    isDarkTheme = !isDarkTheme;
  }
};

image.addEventListener("click", switchTheme);
