import wordBank from "./wordle-bank.txt"


export const boardDefault = 
[
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],

    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],

    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
]
   
const sets = () => {
    let todaysWord = [];
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let firstWord = ""
    for(let i = 0; i < 5; i++){
        firstWord += str.charAt(Math.floor(Math.random() * 
        26))
    }

    todaysWord.push(firstWord);

    let currentWord = firstWord;
    for(let i = 1; i < 13; i++){
        let index = (Math.floor(Math.random() * 5))
        
        let operation = 1
        
        if ((Math.floor(Math.random() * 2)) < 1 && currentWord[index] != "A"){
            operation = -1
        }
        if (currentWord[index] == "Z"){
            operation = -1
        }
        let strIndex = str.indexOf(currentWord[index]) + operation
        
        currentWord = currentWord.substring(0, index) + str[strIndex] 
        + currentWord.substring(index + 1, 5);
        todaysWord.push(currentWord);
    }
    return todaysWord
}

const sett = sets()


export const generateWordSet = async () =>{
    let wordSet; 
    let todaysWord1;
    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
        const wordArr = result.split("\n")
        todaysWord1 = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
    });

    const todaysWord = sett;
  
    console.log(todaysWord)
    // todaysWord = todaysWord[0]
    // console.log(todaysWord)
    
    return {wordSet, todaysWord}
}

// export const generateWordSet = async () =>{
//     let wordSet; 
//     let todaysWord;
//     await fetch(wordBank)
//     .then((response) => response.text())
//     .then((result) => {
//         const wordArr = result.split("\n")
//         todaysWord1 = wordArr[Math.floor(Math.random() * wordArr.length)];
//         wordSet = new Set(wordArr);
//     });



//     return {wordSet, todaysWord1}
// }