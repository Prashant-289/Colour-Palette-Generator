let gBotton = document.querySelector(".btn");
gBotton.addEventListener("click", getColors);
let btncolor = document.querySelectorAll(".selectcolor");
let bgcolor = document.querySelectorAll(".color");

function getColors() {
  let color = "ABCDEF1234567890";
  let num = "#";
  bgcolor.forEach((btn, idx) => {
    for (let i = 0; i < 6; i++) {
      let rNum = Math.floor(Math.random() * 16);
      num = num + color[rNum];
    }
    btn.style.backgroundColor = num;
    num = "#";
  });
}
