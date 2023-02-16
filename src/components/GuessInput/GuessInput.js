import React from "react";

function GuessInput({handleNextGuess, isDisabled}) {
  const [guess, setGuess] = React.useState('')

  return (<form className="guess-input-wrapper" onSubmit={(event)=>{
    event.preventDefault();
    if(guess.length < 5) return;
    handleNextGuess(guess)
    setGuess('')
    }}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input 
    id="guess-input" 
    type="text" 
    value={guess}
    minLength="5"
    maxLength="5"
    onChange={(event)=>{
        const value = event.target.value
        setGuess(value.toUpperCase())
        }}

    disabled={isDisabled}/>
</form>);
}

export default GuessInput;
