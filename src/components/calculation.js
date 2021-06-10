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
    if (!validAnswer(firstInput) || !validAnswer(secondInput)) {
      return setError('Please provide a vaild number for both inputs')
    }

    setError('')
    setAnswer('')

    
  }


  


  return (
    <div className='Calculator'>
      <hi className='title'>React Calcutator</hi>
      <input type='text' name='firstInput' value={firstInput} onChange={event =>
        setFirstInput(event.target.value)} />
      <select name='operator' value={operator} onChange={event => 
        setOperator(event.target.value)} >
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='/'>/</option>
        <option value='*'>*</option>
      </select>
      <input type='text' name='secondInput' value={secondInput} onChange={event =>
        setSecondInput(event.target.value)} /> 
      <button type='button' value='=' onClick={calculation} />
      <input type='text' value={equation} disabled />
      <div className='error'>{error}</div>
    </div>

  )
}

export default Calculation