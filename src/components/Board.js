import React, { useState } from 'react';
import { boardDefault} from "../Words";
import Letter from './Letter';

function Board() {
    
  return (
    <div className='board'>
      
      <div className="row">
        <Letter LetterPos={0} attemptVal={0}/> 
        <Letter LetterPos={1} attemptVal={0}/> 
        <Letter LetterPos={2} attemptVal={0}/> 
        <Letter LetterPos={3} attemptVal={0}/> 
        <Letter LetterPos={4} attemptVal={0}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={1}/> 
        <Letter LetterPos={1} attemptVal={1}/> 
        <Letter LetterPos={2} attemptVal={1}/> 
        <Letter LetterPos={3} attemptVal={1}/> 
        <Letter LetterPos={4} attemptVal={1}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={2}/> 
        <Letter LetterPos={1} attemptVal={2}/> 
        <Letter LetterPos={2} attemptVal={2}/> 
        <Letter LetterPos={3} attemptVal={2}/> 
        <Letter LetterPos={4} attemptVal={2}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={3}/> 
        <Letter LetterPos={1} attemptVal={3}/> 
        <Letter LetterPos={2} attemptVal={3}/> 
        <Letter LetterPos={3} attemptVal={3}/> 
        <Letter LetterPos={4} attemptVal={3}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={4}/> 
        <Letter LetterPos={1} attemptVal={4}/> 
        <Letter LetterPos={2} attemptVal={4}/> 
        <Letter LetterPos={3} attemptVal={4}/> 
        <Letter LetterPos={4} attemptVal={4}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={5}/> 
        <Letter LetterPos={1} attemptVal={5}/> 
        <Letter LetterPos={2} attemptVal={5}/> 
        <Letter LetterPos={3} attemptVal={5}/> 
        <Letter LetterPos={4} attemptVal={5}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={6}/> 
        <Letter LetterPos={1} attemptVal={6}/> 
        <Letter LetterPos={2} attemptVal={6}/> 
        <Letter LetterPos={3} attemptVal={6}/> 
        <Letter LetterPos={4} attemptVal={6}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={7}/> 
        <Letter LetterPos={1} attemptVal={7}/> 
        <Letter LetterPos={2} attemptVal={7}/> 
        <Letter LetterPos={3} attemptVal={7}/> 
        <Letter LetterPos={4} attemptVal={7}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={8}/> 
        <Letter LetterPos={1} attemptVal={8}/> 
        <Letter LetterPos={2} attemptVal={8}/> 
        <Letter LetterPos={3} attemptVal={8}/> 
        <Letter LetterPos={4} attemptVal={8}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={9}/> 
        <Letter LetterPos={1} attemptVal={9}/> 
        <Letter LetterPos={2} attemptVal={9}/> 
        <Letter LetterPos={3} attemptVal={9}/> 
        <Letter LetterPos={4} attemptVal={9}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={10}/> 
        <Letter LetterPos={1} attemptVal={10}/> 
        <Letter LetterPos={2} attemptVal={10}/> 
        <Letter LetterPos={3} attemptVal={10}/> 
        <Letter LetterPos={4} attemptVal={10}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={11}/> 
        <Letter LetterPos={1} attemptVal={11}/> 
        <Letter LetterPos={2} attemptVal={11}/> 
        <Letter LetterPos={3} attemptVal={11}/> 
        <Letter LetterPos={4} attemptVal={11}/> 
      </div>
      <div className="row"> 
      <Letter LetterPos={0} attemptVal={12}/> 
        <Letter LetterPos={1} attemptVal={12}/> 
        <Letter LetterPos={2} attemptVal={12}/> 
        <Letter LetterPos={3} attemptVal={12}/> 
        <Letter LetterPos={4} attemptVal={12}/> 
      </div>
 
    </div>
  )
}

export default Board
