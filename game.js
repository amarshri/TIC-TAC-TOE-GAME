
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgc=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;
let count = 0;
// 2d array

const win=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    count=0;
    enableboxes();
    msgc.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener ("click",()=>{
        if(turn0 === true){
            box.innerText = "O"
            turn0=false;
        }else{
            box.innerText ="X"
            turn0=true;
        }

        box.disabled=true;
        count++;
        let iswinner=checkWinner();
        if (count ===9 &&! iswinner){
            gamedraw();
        }
    });
});
const gamedraw =()=>{
    msg.innerText = `Game was a Draw.`;
  msgc.classList.remove("hide");
  disableboxes();
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}; 

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(Winner)=>{
    msg.innerText =`Congratulations winner is ${Winner}`;
    msgc.classList.remove("hide");
    disableboxes();
};
const checkWinner =()=>{
    for (let patterns of win){
        
        let posi1val=boxes[patterns[0]].innerText
        let posi2val=boxes[patterns[1]].innerText
        let posi3val=boxes[patterns[2]].innerText

        if(posi1val != "" && posi2val != "" && posi3val != ""){
            if(posi1val===posi2val && posi2val===posi3val){
                showwinner(posi1val);
            }
        }
    }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
