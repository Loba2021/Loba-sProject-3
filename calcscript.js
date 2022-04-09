// ##
class Calculator{
    constructor(previousOperandTextElementButtons, currentOperandTextElementButtons){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
// ??
    clear(){
       this.previousOperand = ''; 
       this.currentOperand = '';
       this.operation = undefined 
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.previousOperand = undefined
        this.previousOperand = ''
        // this.equalsButtons = computation
    }
    getDisplayNumber(number) {
        const stingNumber = number.toString()
        const integerDigits = parseFloat(stingNumber.split('.')[0])
        const decimalDigits = stingNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }
        else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0 })
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }
        else {
            return integerDisplay
        }

        // const floatNumber = parseFloat(number)
        // if (isNaN(floatNumber)) return ''
        // return floatNumber.toLocaleString('en')
    }
    updateDisplay(){
        this.currentOperandTextElement.innerHTML = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null){
        this.previousOperandTextElement.innerHTML = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
        else{
            this.previousOperandTextElement.innerText = ''
            this.operation = ''
        }
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const allClearButtons = document.querySelector('[data-all-clear]')
const deleteButtons = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
// ##
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
// ##
numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
        // calculator.appendNumber()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
        // calculator.appendNumber()
    })
})
equalsButtons.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})
allClearButtons.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})
deleteButtons.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})