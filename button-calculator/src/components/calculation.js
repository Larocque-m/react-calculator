import React, { useState } from 'react'

const Calculation = () => {
  const [firstInput, setFirstInput] = useState ('')
  
  
  const updatValue = (event) => {
    setValue ()
  }

  return (
    <div className='Calculator'>
      <hi className='title'>React Calcutator</hi>
      <input type='text' name='firstInput' value={firstInput} onChange={event =>
      setFirstInput(event.target.value)} />
    </div>

  )
}

export default Calculation