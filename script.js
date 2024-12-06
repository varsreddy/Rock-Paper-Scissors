let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userId = document.querySelector("#user-score");
const compId = document.querySelector("#comp-score");
const desc = document.querySelector("#extra");

const check = (userChoice,compChoice) =>{
    if(userChoice === compChoice){
        msg.style.backgroundColor = "black";
        msg.innerText ="Game is Draw";
        console.log("Game is DRAW");
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //comp choices:  paper or scisscor
            userWin =  (compChoice === "paper")?false:true;
        }
        if(userChoice === "paper"){
            userWin = (compChoice === "scissors")?false:true;
        }
        if(userChoice === "scissors"){
            userWin = (compChoice === "rock")?false:true;
        }

        if(userWin === true){
            console.log("User won the game");
            user++;
            msg.style.backgroundColor = "green";
            msg.innerText = "you WON the Game";
            userId.innerText = user;
        }
        else{
            console.log("User lost the game");
            comp++;
            msg.style.backgroundColor = "red";
            msg.innerText = "you LOST the Game";
            compId.innerText = comp;
        }
    }
    desc.innerHTML = "User choice is <b>"+userChoice+"</b> and  Computer choice is <b>"+compChoice+"</b>.Sooo...";

};


const generateCompChoice = () =>{
    //rock,paper,scissors
    const options = ["rock","paper","scissors"];
    let ran = Math.floor(Math.random()*3);
    return options[ran];
};

const playGame = (userChoice)=>{
    // console.log("user choice: ",userChoice);
    const compChoice = generateCompChoice();
    console.log("Computer choice: ",compChoice);
    console.log("User choice: ",userChoice);
    check(userChoice,compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener(("click"),() => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice is clicked!",userChoice);
        playGame(userChoice);
    })
})
