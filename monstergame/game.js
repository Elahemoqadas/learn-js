const attack_value=10;
const strong_attack_value=17;
const monster_attack_value=14;
const heal_value=20;

function getmaxvalue(){
    const enteredvalue=prompt('Maximum life for you and the monster.','100');
    const chvlue=parseInt(enteredvalue);
    if(isNaN(chvlue) || chvlue<=0){
        throw{massage:'Invalid user input, not a number!'}
    }
    return chvlue;
}

let choosenmaxlife;
try{
    choosenmaxlife =getmaxvalue();
}catch(error){
    console.log(error);
    choosenmaxlife=100;
    alert('You entered something wrong, default value of 100 was used.');
}

let monsterhealth=choosenmaxlife;
let playerhealth=choosenmaxlife;
let hasbounslife=true;

const MODE_ATTACK = 'ATTACK'; 
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

complithealthlife(choosenmaxlife);

function reset(){
    playerhealth= choosenmaxlife;
    monsterhealth=choosenmaxlife;
    resetgame(choosenmaxlife);
}


function endround(){
    iniplayerhealth=playerhealth;
    const playerdamage=deelplayerdamage(monster_attack_value);
    playerhealth-=playerdamage;
    if(playerhealth<=0 && hasbounslife){
        hasbounslife=false;
        removeBonusLife();
        playerhealth=iniplayerhealth;
        relife(iniplayerhealth);
        alert('You would be dead but the bonus life saved you!');
    }

    if (monsterhealth <= 0 && playerhealth > 0) {
        alert('You won!');
    } else if (playerhealth <= 0 && monsterhealth > 0) {
        alert('You lost!');
    } else if (playerhealth <= 0 && monsterhealth <= 0) {
        alert('You have a draw!');
    }
    if(playerhealth<=0 || monsterhealth<=0) reset();
}

function attackhandeler(mode){
    const maxdamag = mode === MODE_ATTACK ? attack_value : strong_attack_value;
    const damage=deelmonsterdamage(maxdamag);
    monsterhealth-=damage;
    endround();
}

function attack(){
    attackhandeler(MODE_ATTACK);
}
function strongattack(){
    attackhandeler(MODE_STRONG_ATTACK);
}
function healthhandeler(){
    let hval;
    if(playerhealth + heal_value >= choosenmaxlife){
        alert("You can't heal to more than your max initial health.");
        hval=choosenmaxlife-playerhealth;
    }else{
        hval=heal_value;
    }
    increasplayerhealth(hval);
    playerhealth+=hval;
    endround();
}

attackb.addEventListener('click',attack);
strongattackb.addEventListener('click',strongattack);
healthb.addEventListener('click',healthhandeler);
