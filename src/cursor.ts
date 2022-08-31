import { gsap } from "gsap";

const cursor:HTMLDivElement = document.querySelector("#cursor");
const buttons = document.querySelectorAll("button");

let mouseX = 0
let mouseY = 0


function mouseMove(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;

  cursor.style.top = `${mouseY-25}px`;
  cursor.style.left = `${mouseX}px`;

  
}



document.addEventListener("mousemove", e => {
  mouseMove(e);
})

buttons.forEach(elem => {
  elem.addEventListener("mouseover", e => {
    if (!elem.classList.contains("disabled")){
      cursor.classList.add("active");
    }
  })
  elem.addEventListener("mouseout", e => {
    cursor.classList.remove("active");
  })
})

