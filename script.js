function add(numOne, numTwo)
{
    return numOne + numTwo;
}

function subtract(numOne, numTwo)
{
    return numOne - numTwo;
}

function multiply(numOne, numTwo)
{
    return numOne * numTwo;
}

function divide(numOne, numTwo)
{
    return numOne / numTwo;
}

function operate(operator, numOne, numTwo)
{
   switch(operator)
   {
        case '+':
            add(numOne,numTwo);
            break;
        
        case '-':
            subtract(numOne,numTwo);
            break;
        
        case '*':
            multiply(numOne,numTwo);
            break;
        
        case '/':
            divide(numOne,numTwo);
            break;
        
        default:
            console.log("Invalid operation");
   }
}