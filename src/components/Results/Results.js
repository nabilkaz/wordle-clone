import React from "react";
import Guess from "../Guess"
import {range} from "../../utils"
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"

function Results({guesses}) {
  const rowAmount = range(NUM_OF_GUESSES_ALLOWED)

  const EMPTY_LETTER = {letter:'', status:''}
  const EMPTY_GUESS = [EMPTY_LETTER, EMPTY_LETTER, EMPTY_LETTER, EMPTY_LETTER, EMPTY_LETTER]
  const guessResults = rowAmount.map((row, index) => guesses[index] || EMPTY_GUESS)
  return (<div className="guess-results">
    {guessResults.map((word, index) => <Guess key={index} word={word}/>)}
  </div>);
}

export default Results;