const bar = document.querySelector(".bar");
const time = document.querySelector(".time");
const navLink = document.querySelector("nav");
bar.addEventListener("click", () => {
//toggle
navLink.classList.add("show-link");
  });

  time.addEventListener("click", () => {
    //toggle
    navLink.classList.remove("show-link");
      });