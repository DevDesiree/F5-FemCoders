
let numbersList = [5, 8, 2, 10, 7, 1, 12, 6, 109, 4];
let copyList = [...numbersList]

// (1) Function Print array numbers
function getNumbers(list){
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
getNumbers(numbersList)


// (2) Function Add new number to array
function addNumber(list, number){
    list.push(number)
    console.log(list);
}
addNumber(copyList, 77)


// (3) Function Remove the pairs
function removePairs(list){

    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i] % 2 === 0) {
            list.splice(i, 1);
        }
    }
    console.log(list);

}
removePairs(copyList)


// (4) Function return the max number
function maxNumber(list){
    numMax = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] > numMax){
            numMax = list[i]
        }
    }
    console.log("El numero mas alto es" + numMax);
}
maxNumber(numbersList)

// (5) Function return the min number
function minNumber(list){
    numMin = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < numMin){
            numMin = list[i]
        }
    }
    console.log("El numero mas bajo es" + numMin);

}
minNumber(numbersList)

//(6) Function convert in lowercase
let text = "Hola. PARECE QUE GRITO, pero no, es para probar"
 
function lowerCase(text){
    let min = ""
    for (let i = 0; i < text.length; i++) {
        min += text[i].toLowerCase()
    }
    console.log(min)

}
lowerCase(text)


// (7) Function convert in uppercase
function upperCase(text) {
    let may = "";
    for (let i = 0; i < text.length; i++) {
        may += text[i].toUpperCase()
        
    }
    console.log(may);
}

upperCase(text)

// (8) Function convert each letter of array to uppercase

let nameList = ["pepe", "juan", "lucia", "ana"]

function upperName(list) {
    let saveName = "";
    
    for (let i = 0; i < list.length; i++) {
        saveName = list[i];
        saveName = saveName.charAt(0).toUpperCase() + saveName.slice(1);
        
        console.log(saveName);
    }
}

upperName(nameList)