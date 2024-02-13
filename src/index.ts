const inputArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 0, 5, 7, 0]
let result: number = 0

function calculateCircleNumbers(array: number[]){ // La primera manera que se me ha ocurrido
    const tamañoInputArray: number = array.length
    for (let i = 0; i < tamañoInputArray; i++){
        const currentNum = array[i]
        switch(currentNum){
            case 0:
                result++
                break;
            case 6: 
                result++
                break;
            case 8:
                result++
                break;
            case 9:
                result++
                break;
        }
    }
    printResult()
}

function calculateCircleNumbers2(arrayFilter: number[]){ // La segunda manera que se me ha ocurrido
    const circleNumbers: number[] = []
    arrayFilter.filter((num) => {if (num == 0 || num == 6 || num == 8 || num == 9){
        circleNumbers.push(num)
    }})
    result = circleNumbers.length
    printResult()
}

function printResult(){
    console.log(`Hay un total de ${result} numeros circulares`)
    result = 0;
}

function calculateCircleNumbersJuanCarlos(){
    const numerosCirculares = [0, 6, 8, 9];

    const checkCircular = (numero: number): number => {
        let contador: number = 0;
        const digitos = numero.toString().split("").map(Number);
        digitos.forEach((digit) => {
            if (numerosCirculares.includes(digit)) {
                contador += 1;
            }
        })
        return contador;
    }
console.log(`Hay un total de ${checkCircular(1689208230326)} numeros circulares`);
}

calculateCircleNumbers(inputArray)
calculateCircleNumbers2(inputArray)
calculateCircleNumbersJuanCarlos()