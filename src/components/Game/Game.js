import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Results from '../Results'
import Banner from '../Banner'
import { checkGuess, isGuessCorrect } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([])
  
  function handleNextGuess(nextGuess) {
      setGuessList([...guessList, checkGuess(nextGuess, answer)])
  }

  function hasGameEnded(){
    if(!!guessList.length) {
      const lastGuess = guessList[guessList.length-1]
      if(isGuessCorrect(lastGuess) || guessList.length === 6) {
        return true
      }
    }
    return false
  }

  return (<>
    <Results guesses={guessList}/>
    <GuessInput handleNextGuess={handleNextGuess} isDisabled={hasGameEnded()}/>
    {hasGameEnded() && <Banner isWinner={isGuessCorrect(guessList[guessList.length-1])} numOfGuesses={guessList.length} answer={answer}/>}
    </>);
}

export default Game;
