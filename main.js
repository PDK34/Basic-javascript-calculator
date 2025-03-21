
let isSecondNumEntered = false;
let isOpEntered = false;
let operation = null;
let isFirstNumEntered = false;
let num1 = '';
let num2 = '';
let result = '';


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
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

numOp.addEventListener('click' ,(e) => {
    let value = e.target.textContent;
    if(!isFirstNumEntered&&num.includes(Number(value))){
    screen2.textContent += value;
    num1 = Number(screen2.textContent);
    
    
       }

    if(num1&&!isOpEntered&&op.includes(value)){
        
        
        console.log(num1);
        screen2.textContent += value;
        operation = value;
        console.log(operation);

        isFirstNumEntered = true;
        isSecondNumEntered = false;
        isOpEntered = true;

    }


    if(isOpEntered&&!isSecondNumEntered&&num.includes(Number(value))){
        screen2.textContent += value;

        num1 = Number(screen2.textContent.split(operation)[0]);
        num2 = Number(screen2.textContent.split(operation)[1]);



    }

    if(value === "="){
        screen1.textContent = `${num1} ${operation} ${num2}`;

        result = operations[operation](num1,num2);
        screen2.textContent = result;
        num1 = result;

        isSecondNumEntered = true;
        isOpEntered = false;

    }

    if(value === "CLEAR"){
        screen2.textContent = '';

        isSecondNumEntered = false;
        isOpEntered = false;
        operation = null;
        isFirstNumEntered = false;
        num1 = null;
        num2 = null;


    }


})
