const bar = document.querySelector(".bar");
const time = document.querySelector(".time");
const navLink = document.querySelector("nav");
bar.addEventListener("click", () => {
//toggle
navLink.classList.add("show-link");
  });
time.addEventListener("click", () => {
      navLink.classList.remove("show-link");
      });
    

      window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
          document.querySelector("header").style.boxShadow =
            "9px 9px 10px -12px rgb(26, 25, 25)";
       
        } else {
          document.querySelector("header").style.boxShadow=
            "none";
       
        }
      });


      var arrowUp = document.querySelector(".arrowup");
      window.addEventListener("scroll", clickArrow);
      
      function clickArrow() {
        if (window.scrollY > 50) {
          arrowUp.style.display = "block";
        } else {
          arrowUp.style.display = "none";
        }
      } 