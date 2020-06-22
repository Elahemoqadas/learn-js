const startgamebtn=document.getElementById('start-game-btn');

const ROCK='ROCK';
const PAPER='PAPER';
const SCISSORS='SCISSORS';
const DRAW='DRAW';
const pwin='PLAYER_WIN';
const cwin='COMPUTER_WIN';
let randval;
let gameisstarting=false;

const DEFULTECHOICE=()=>{
    const randomval=Math.random();
    if(randomval<0.34){
        return ROCK;
    }else if(randomval<0.68){
        return PAPER;
    }else{
        return SCISSORS;
    }
}
const getplayerchoise=()=> {
    const selection=prompt(`${ROCK},${PAPER} or ${SCISSORS}?`,'').toUpperCase();
    if( selection!==ROCK &&
        selection!==PAPER &&
        selection!==SCISSORS
    ){
        alert(`Invalid choice! We chose ${randval} for you!`);
        return randval;
    }
    return selection;
};

const computerchoise=()=> {
    const randomval=Math.random();
    if(randomval<0.34){
        return ROCK;
    }else if(randomval<0.68){
        return PAPER;
    }else{
        return SCISSORS;
    }
};
const getwinner=(cchoice , pchoice=randval)=>
pchoice === cchoice
 ? DRAW
 : (cchoice === ROCK && pchoice === PAPER ) ||
   (cchoice === PAPER && pchoice === SCISSORS) ||
   (cchoice === SCISSORS && pchoice === ROCK)
 ? pwin
 : cwin;
    
      

startgamebtn.addEventListener('click', function() {
    if (gameisstarting) return;
    gameisstarting=true;
    console.log('game is starting...');
    randval=DEFULTECHOICE();
    const playerselection=getplayerchoise();
    const computerselection=computerchoise();
    let winner;
    if(playerselection) winner=getwinner(computerselection,playerselection);
    else winner=getwinner(computerselection);
    let massage=`you pick ${playerselection} and coputer pick ${computerselection},therfore you`;
    if(winner===DRAW){
        massage=massage + ` had draw`;
    }else if(winner===pwin){
        massage=massage+` won`;
    }else{
        massage=massage+` lost`;
    }
    alert(massage);
    gameisstarting=false;
});