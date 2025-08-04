let gBotton = document.querySelector(".btn");
let btncolor = document.querySelectorAll(".selectcolor");
let bgcolor = document.querySelectorAll(".color");
let copyicon = document.querySelectorAll(".fa-copy");

gBotton.addEventListener("click", getColors);
copyicon.forEach(function (icon) {
  icon.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-copy")) {
      const hexVal = e.target.previousElementSibling.textContent;
      navigator.clipboard.writeText(hexVal);
    }
  });
});

function getColors() {
  let color = "ABCDEF1234567890";
  let num = "#";
  bgcolor.forEach((btn, idx) => {
    for (let i = 0; i < 6; i++) {
      let rNum = Math.floor(Math.random() * 16);
      num = num + color[rNum];
    }
    copyicon[idx].previousElementSibling.textContent = num;
    btn.style.backgroundColor = num;

    num = "#";
  });
}
