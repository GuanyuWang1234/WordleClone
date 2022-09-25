import React, {useContext, useEffect, useCallback} from 'react'
import Key from './Key';
import {AppContext} from "../App";


function Keyboard() {
    const {onDelete, onEnter, onSelectLetter, disabledLetters, currentAttempt} = useContext(AppContext);

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    
    const handleKeyboard = useCallback((event) =>{
        if (event.key === "Enter"){
            onEnter();
        }
        else if(event.key === "Backspace"){
            onDelete();
        }   
        else{
            keys1.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key);
                }
            })
            keys2.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key);
                }
            })
            keys3.forEach((key) => {
                if (event.key.toLowerCase()=== key.toLowerCase()){
                    onSelectLetter(key); 
                }
            })
        }
    },[currentAttempt] )
    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard)
        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        }
    }, [handleKeyboard])

    // console.log(disabledLetters);
    // for(let i = 0; i< keys1.length; i++){
    //     console.log(disabledLetters.includes(keys1[i]));
    // }


  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
       <div className="line1">
        {keys1.map((key) => {
            
       return <Key keyVal={key} disabled={disabledLetters.includes(Key)} />})}

       </div>
       <div className="line2">
       {keys2.map((key) => {
       return <Key keyVal={key} disabled={disabledLetters.includes(Key)}/>;})}
        </div>
       <div className="line3"> 
       <Key keyVal={"ENTER"} bigKey/>
       {keys3.map((key) => {
       return <Key keyVal={key} disabled={disabledLetters.includes(Key)}/>;})}
       <Key keyVal={"DELETE"} bigKey/>
       </div>
    </div>
  )
}

export default Keyboard
