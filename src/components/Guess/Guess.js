import React from "react";
import { range } from "../../utils";

function Guess({word}) {
  const WORD_LENGTH = 5;
  return (<p className="guess">
  {range(WORD_LENGTH).map(
    (num, index)=>{
      const letter = word[num].letter
      const letterStatus = word[num].status
    return(<span key={index} className={`cell ${letterStatus}`}>
          {letter}
          </span>)})}
  </p>);
}

export default Guess;
