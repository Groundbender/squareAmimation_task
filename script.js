let btnStart = document.querySelector(".animate");
let btnStop = document.querySelector(".stop-animate");

let elem = document.querySelector(".square");
let position = 0;
let active = false;
let id;

btnStart.addEventListener("click", () => {
  active = !active;
  myAnimation();
});

btnStop.addEventListener("click", () => {
  active = false;
  position = 0;
  elem.style.left = position + "px";
  elem.style.top = position + "px";
  cancelAnimationFrame(id);
});

const myAnimation = () => {
  id = requestAnimationFrame(myAnimation);
  if (active) {
    if (elem.style.left === "400px") {
      position = 0;
      elem.style.left = position + "px";
      elem.style.top = position + "px";
    } else {
      position++;
      elem.style.left = position + "px";
      elem.style.top = position + "px";
    }
  } else {
    cancelAnimationFrame(id);
  }
};
