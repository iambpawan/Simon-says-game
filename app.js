let gamestack = [];
let userstack = [];
let btns = ["yellow", "green", "red", "purple"];
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    level = 0;
    gamestack = [];
    userstack = [];
    levelUp();
  }
});

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}


function levelUp() {
  userstack = [];
  level++;
  let levelmsg = document.querySelector("h2");
  levelmsg.innerText = `Level ${level}`;
  let randclr = Math.floor(Math.random() * 3);
  //console.log(randclr);
  randclr = btns[randclr];
  let randbtn = document.querySelector(`.${randclr}`);
  gamestack.push(randclr);
  console.log(gamestack);
  gameFlash(randbtn);
}

function checkAns(idx) {
  //console.log("current leven:", level);
  //let idx=level-1;
  //console.log(userstack);
  //console.log(gamestack);
  if (userstack[idx] === gamestack[idx]) {
    if (userstack.length == gamestack.length) {
      setTimeout(levelUp(), 1000);
    }  
    //console.log("same ");
  } else {
    document.querySelector(
        "h2"
      ).innerHTML= `Game over! your score was <b>${level} </b> <br>press any key to start again.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"; 
    },200)
    started = false;
  }
}

function btnPress() {
  //console.log(this);
  userFlash(this);
  userColor = this.getAttribute("id");
  //console.log(userColor);
  userstack.push(userColor);
  checkAns(userstack.length - 1);
}


// let btn=document.querySelector(".btn yellow");
// btn.addEventListener("click",function(event){
//     console.log(event.target)
// });
