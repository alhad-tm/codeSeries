import React from 'react'

const Counter = ({state,setState}) => {
  
  return (
    <div>

     <button onClick={()=> {if (state>0) setState(state-1) }   }>Less</button> 

      <span>{state}</span>

      <button onClick={() => setState(state + 1)}>Add</button>
      
    </div>
  )
}

export default Counter
