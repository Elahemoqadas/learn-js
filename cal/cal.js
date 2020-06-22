// moteghayeri ke natije jam ra dar an mirizim
const defaultResult = 0;
let currentResult = defaultResult;

// gereftn vorodi az karbar
function getUserNumberInput() {
  return parseInt(usrInput.value);
}// parseint vase ine ke reshte ro tabdil be int kone

// tabee ke maghadir khoroji ra misazadas va baraye namayesh dade shodn be tabe outputresult ke dr file link has mifrestd

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription= `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}

function calculateResult(calculationType){
    // check miknd vorodi dorost vared shavad
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
      ) {
        return;
      }
      const initialResult = currentResult;
      let mathOperator;
    //   anajam amaliat
    if (calculationType =='ADD') {
        currentResult += enteredNumber;
        mathOperator='+';
    }
    if (calculationType =='SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator='-'; 
    }
    if (calculationType =='MULTIPLY') {
        currentResult *= enteredNumber; 
        mathOperator='*';
    }
    if (calculationType =='DIVIDE') {
        currentResult /= enteredNumber; 
        mathOperator='/';
    }
    createAndWriteOutput(mathOperator,initialResult,enteredNumber); 
 }


//  entekhab amalgar
function add(){
    calculateResult('ADD');
}
function sub(){    
    calculateResult('SUBTRACT');
}
function multi()
{
    calculateResult('MULTIPLY');
}
function divi(){
    calculateResult('DIVIDE');
}




// moshakhas mikonim ba har dokme kodam tabe farakhani shvad
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', divi);


