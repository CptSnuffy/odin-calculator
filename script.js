
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
    try
    {
        answer = stringMath(equation);
        answer = parseFloat(answer).toFixed(2);
        return answer;
    }

    catch(e)
    {
        console.log(e);
        return 'Nice try you silly goober :)';
    }
}

function displayText(character, isOperator=false)
{
    let display = document.getElementById('numberdisplay');

    if(character == 'back')
    {
        let str = display.textContent
        str = str.substring(0, str.length-1);
        display.textContent = str;
        return;
    }

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

let keyboardListener = document.addEventListener('keydown', function (key) {
    switch(key.key)
    {
        case '1':
            displayText(key.key, false);
            break;

        case '2':
            displayText(key.key, false);
            break;

        case '3':
            displayText(key.key, false);
            break;

        case '4':
            displayText(key.key, false);
            break;

        case '5':
            displayText(key.key, false);
            break;
            
        case '6':
            displayText(key.key, false);
            break;

        case '7':
            displayText(key.key, false);
            break;

        case '8':
            displayText(key.key, false);
            break;

        case '9':
            displayText(key.key, false);
            break;

        case '0':
            displayText(key.key, false);
            break;

        case '+':
            displayText(key.key, true);
            break;

        case '-':
            displayText(key.key, true);
            break;

        case '*':
            displayText(key.key, true);
            break;

        case '/':
            displayText(key.key, true);
            break;

        case '(':
            displayText(key.key, false);
            break;
        case ')':
            displayText(key.key, false);
            break;

        case '.':
            displayText(key.key, true);
            break;
        
        case 'Backspace':
            displayText('back', false);
            break;
        
        case 'Delete':
            displayText('back', false);
            break;
        
        case 'Enter':
            parseNumbers();
            break;
            
        default:
            return
    }
});

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
    //answer = parseFloat(answer).toFixed(2);
    console.log(answer);
    equation.innerHTML = answer;

}