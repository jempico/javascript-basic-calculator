/*SELECTING DINAMIC ELEMENTS*/

const calculator = document.querySelector('.calculator');
const result = calculator.querySelector('.result');
const keys = calculator.querySelector('.keys');

/*ADDING EVENT LISTENERS*/

keys.addEventListener('click', calculate);

/* DEFINING FUNCTIONS */

function calculate(e){
    const key = e.target
    const action = key.dataset.action; 
    const keyContent = key.textContent;
    const display = document.querySelector('.result');
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;


    // Si el elemento no tiene un data-action attribute debe ser un número
    if (!action) {
        if (displayedNum === '0') {
            display.textContent = keyContent;
        
        //Si previamente se ha clicado un operador, se resetea la pantalla para mostrar el nuevo número.
        } else if (previousKeyType === 'operator') {
            display.textContent = keyContent;
            calculator.dataset.previousKeyType = '';
        
        // Concadenando números
        } else {
            display.textContent = displayedNum + keyContent;
        }
    }
    if (action == 'divide' ||
        action == 'add' ||
        action == 'substract' ||
        action == 'multiply' 
        ){
             
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
    }
     if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;   

        display.textContent = makeOperation(firstValue, operator, secondValue);
    }


/* MAKE OPERATION FUNCTION */

function makeOperation(n1, operator, n2) {
        let result = ''
        let parsed1 = parseFloat(n1);
        let parsed2 = parseFloat(n2);

        if (operator === 'add') {
          result = parsed1 + parsed2
        } else if (operator === 'substract') {
          result = parsed1 - parsed2
        } else if (operator === 'multiply') {
          result = parsed1 * parsed2
        } else if (operator === 'divide') {
          result = parsed1 / parsed2
        }
        
        return result;
      }
}