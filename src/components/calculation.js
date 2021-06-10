import React, { useState } from 'react'

const Calculation = () => {
  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const [operator, setOperator] = useState('')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')

  const validAnswer = () => 
    !Number.isNaN(Number(firstInput)) && !Number.isNaN(Number(secondInput)) &&
    firstInput !== '' && secondInput !== ''

  const calculation = () => {
    setError('')
    setAnswer('')
    
    if (!validAnswer(firstInput) || !validAnswer(secondInput)) {
      return setError("Please provide a vaild number for both inputs")
    }

    switch (operator) {
      case 'add':
        return setAnswer(Number(firstInput) + Number(secondInput))
      case 'subtract':
        return setAnswer(Number(firstInput) - Number(secondInput))
      case 'divide':
        return setAnswer(Number(firstInput) / Number(secondInput))
      case 'multiply':
        return setAnswer(Number(firstInput) * Number(secondInput))
      default: 
        return setError('Please give a valid input') 
  
    }

  }


  


  return (
    <div className="Calculator">
      <hi className="title">React Calcutator</hi>
      <input type="text" name="firstInput" value={firstInput} onChange={event =>
        setFirstInput(event.target.value)} />
      <select name="operator" value={operator} onChange={event => 
        setOperator(event.target.value)} >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="divide">/</option>
        <option value="multiply">*</option>
      </select>
      <input type="text" name="secondInput" value={secondInput} onChange={event =>
        setSecondInput(event.target.value)} /> 
      <button type="button" value="=" onClick={calculation}>=</button>
      <input type="text" className="display" value={answer} disabled />
      <div className="error">{error}</div>
    </div>

  )
}

export default Calculation