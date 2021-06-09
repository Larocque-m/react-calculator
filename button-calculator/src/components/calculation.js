import React, { useState } from 'react'

const Calculation = () => {
  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const [operator, setOperator] = useState('')

  const updatValue = (event) => {
    setValue ()
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
    </div>

  )
}

export default Calculation