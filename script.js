let firstNumber, secondNumber, operator

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
        default:
            break;
    }
}

const numbers = document.querySelectorAll(".number")
const result = document.querySelector("#result")
const point = document.querySelector(".point")

numbers.forEach(element => {
    element.addEventListener("click", () => {
        if(result.value == 0) {
            result.value = ""
        }
        const number = element.innerText
        result.value += number
    })
})

point.addEventListener("click", () => {
    if(!result.value.includes(".")) {
        result.value += "."
    }
})

const operators = document.querySelectorAll(".operator")
const operation = document.querySelector("#operation")

operators.forEach(element => {
    element.addEventListener("click", () => {
        firstNumber = result.value
        operator = element.innerText

        if(result.value != "") {    
            operation.value = firstNumber + " " + operator
            result.value = ""
        } else {
            operation.value = operation.value.slice(0, -1) //change operator
            operation.value += operator
        }
    })
})

const ac = document.querySelector(".ac")

ac.addEventListener("click", () => {
    result.value = "0"
    operation.value = ""
    firstNumber = ""
    operator = ""
    secondNumber = ""
})

const equal = document.querySelector(".equal")

equal.addEventListener("click", () => {
    secondNumber = result.value
    operation.value += " " + secondNumber

    const output = calculate(firstNumber, secondNumber, operator)
    console.log(output)
    result.value = output
})