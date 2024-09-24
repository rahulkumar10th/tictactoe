let boxes = document.querySelectorAll(".box1");
let resetbtn = document.querySelector("#Reset-btn");
let newbtn=document.querySelector(".new");
let msgcontainer=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");

let turn0 = true; //playerx,playr0
const winpattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resbtn = ()=>{
  turn0=true;
  enableboxes();
  msgcontainer.classList.add("hide");

};

boxes.forEach((box1) => {
  box1.addEventListener("click", () => {
  
    if (turn0) {
      // player 0
      box1.innerText = "0";
      turn0 = false;
    } else {
      box1.innerText = "x"; //player2
      turn0 = "true";
    }
    box1.disabled = true;

    checkwinner();
  });
});
const disableboxes=()=>{
  for(let box1 of boxes){
    box1.disabled=true;
  }
};
const enableboxes=()=>{
  for(let box1 of boxes){
    box1.disabled=false;
    box1.innerText="";
  }
};

const showWinner = (winner) =>{
msg.innerText='congratualion,winner is ${winner}';
msgcontainer.classList.remove("hide");
disableboxes();


};

const checkwinner = () => {
  for (let pattern of winpattern) {

    let pos1val= boxes[pattern[0]].innerText; 
    let pos2val= boxes[pattern[1]].innerText;
   let  pos3val= boxes[pattern[2]].innerText;
   if(pos1val !="" && pos2val !="" && pos3val !=""){
    if(pos1val === pos2val && pos2val === pos3val){ 
        showWinner(pos1val);
    }
   }
    
  }
};

resetbtn.addEventListener("click",resbtn);
newbtn.addEventListener("click",resbtn);
