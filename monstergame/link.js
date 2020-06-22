const monsterhealthbar=document.getElementById('monsterhealth');
const playerhealthbar=document.getElementById('playerhealth');
const bouns=document.getElementById('bouns_life');

const attackb=document.getElementById('attackbtn');
const strongattackb=document.getElementById('strongattackbtn');
const healthb=document.getElementById('healthbtn');

function complithealthlife(maxlife){
    monsterhealthbar.max=maxlife;
    monsterhealthbar.value=maxlife;
    playerhealthbar.max=maxlife;
    playerhealthbar.value=maxlife;
}
function resetgame(maxlifee){
    monsterhealthbar.value=maxlifee;
    playerhealthbar.value=maxlifee;
}
function deelmonsterdamage(damage){
    const deeldamage=Math.random() * damage;
    monsterhealthbar.value = +monsterhealthbar.value - deeldamage;
    return deeldamage;
}
function deelplayerdamage(damage){
    const deeldamage=Math.random() * damage;
    playerhealthbar.value = +playerhealthbar.value - deeldamage;
    return deeldamage;
}
function increasplayerhealth(healval){
    playerhealthbar.value = +playerhealthbar.value + healval;
}
function removeBonusLife() {
    bouns.parentNode.removeChild(bouns);
 }
 function relife(rehealth){
    playerhealthbar.value =rehealth;
 }
  