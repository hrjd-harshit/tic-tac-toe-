let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let IMPmsg = document.querySelector("#IMPmsg");
let reset = document.querySelectorAll(".Refresh");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("this button was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
reset.forEach((Refresh) => {
  Refresh.addEventListener("click", () => {
    console.log("new game will start soon");
    turnO = true;
    boxes.forEach((box) => {
      box.innerText = "";
      UnableBox();
      msg.classList.add("hide");
    });
  });
});
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let valuePos1 = boxes[pattern[0]].innerText;
    let valuePos2 = boxes[pattern[1]].innerText;
    let valuePos3 = boxes[pattern[2]].innerText;

    if (valuePos1 != "" && valuePos2 != "" && valuePos3 != "") {
      if (valuePos1 === valuePos2 && valuePos2 === valuePos3) {
        console.log("winner " + valuePos1);
        showWinner(valuePos1);
        disableBox();
      }
    }
  }
};

const showWinner = (winner) => {
  IMPmsg.innerText = `Congratulation , the winner is ${winner}`;
  msg.classList.remove("hide");
};

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const UnableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};


