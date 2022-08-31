import { gsap } from "gsap";

const cursor = document.querySelector("#cursor");
const buttons = document.querySelectorAll("button");

let mouseX = 0
let mouseY = 0


function mouseMove(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
}

gsap.to({}, .1, {
  repeat: -1,
  onRepeat: () => {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY-25,
      }
    })
  }
})

document.addEventListener("mousemove", e => {
  mouseMove(e);
})

buttons.forEach(elem => {
  elem.addEventListener("mouseover", e => {
    cursor.classList.add("active");
  })
  elem.addEventListener("mouseout", e => {
    cursor.classList.remove("active");
  })
})

