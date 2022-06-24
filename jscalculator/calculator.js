alert('Please enter the numbers to be operated on in the provided boxes, then select an operator');
//Calculaotr function
function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operand = document.getElementById('operators').value;
    
    if(operand === '+') {
        document.getElementById('result').value = num1+num2;
    } if(operand === '-') {
        document.getElementById('result').value = num1-num2;
    } if(operand === '/') {
        document.getElementById('result').value = num1/num2;
    } if(operand === 'x') {
        document.getElementById('result').value = num1*num2;
    }
}

