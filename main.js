
let isSecondNumEntered = false;
let isOpEntered = false;
let operation = null;
let isFirstNumEntered = false;
let num1 = null;
let num2 = null;


const numOp = document.querySelector('.numop');
const op = ['+','-','x','÷']
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '÷': (a, b) => a / b
};
const num = [1,2,3,4,5,6,7,8,9,0];
const screen = document.querySelector('.screen');
numOp.addEventListener('click' ,(e) => {
    let value = e.target.textContent;
    if(!isFirstNumEntered&&num.includes(Number(value))){
    screen.textContent += value;
    
    
       }

    if(!isOpEntered&&op.includes(value)){
        num1 = Number(screen.textContent);
        console.log(num1);
        screen.textContent += value;
        operation = value;
        console.log(operation);

        isFirstNumEntered = true;
        isSecondNumEntered = false;
        isOpEntered = true;

    }


    if(isOpEntered&&!isSecondNumEntered&&num.includes(Number(value))){
        screen.textContent += value;

        let num1 = Number(screen.textContent.split(operation)[0]);
        let num2 = Number(screen.textContent.split(operation)[1]);
        console.log(num1);
        console.log(num2);
        console.log(operations[operation](num1,num2));
        screen.textContent += ` = ${operations[operation](num1,num2)}`;
        isSecondNumEntered = true;


    }

    if(value === "CLEAR"){
        screen.textContent = '';
        isSecondNumEntered = false;
        isOpEntered = false;
        operation = null;
        isFirstNumEntered = false;
        num1 = null;
        num2 = null;

    }


})
