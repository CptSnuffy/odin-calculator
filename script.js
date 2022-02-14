
// function add(numOne, numTwo)
// {
//     return numOne + numTwo;
// }

// function subtract(numOne, numTwo)
// {
//     return numOne - numTwo;
// }

// function multiply(numOne, numTwo)
// {
//     return numOne * numTwo;
// }

// function divide(numOne, numTwo)
// {
//     return numOne / numTwo;
// }

// function operate(operator, numOne = 0, numTwo = 0)
// {
//    switch(operator)
//    {
//         case '+':
//             return add(numOne,numTwo);
        
//         case '-':
//             return subtract(numOne,numTwo);
        
//         case '*':
//             return multiply(numOne,numTwo);
        
//         case '/':
//             return divide(numOne,numTwo);
        
//         default:
//             console.log("Invalid operation");
//    }
// }

function operate(equation)
{
    return stringMath(equation);
}

function displayText(character, isOperator=false)
{
    let display = document.getElementById('numberdisplay');
    if ((display.textContent.endsWith('+') && isOperator) || (display.textContent.endsWith('-') && isOperator) || (display.textContent.endsWith('*') && isOperator) || (display.textContent.endsWith('/') && isOperator) || (display.textContent.endsWith('.') && isOperator))
    {
        console.log(display.textContent[display.textContent.length -1]);
        display.textContent = display.textContent.slice(0,-1);
        display.textContent += character;
    }

    else
    {
        display.textContent += character;
    }
}

function clearText()
{
    let display = document.getElementById('numberdisplay');
    display.textContent = '';
}

function parseNumbers()
{
    let equation = document.getElementById('numberdisplay');
    equationToString = equation.innerHTML;
    let splitEquation = equationToString.split(/(\d+\D+^\d)/);
    let answer = operate(splitEquation[0]);
    equation.innerHTML = answer;

}