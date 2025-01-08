import React, { useState } from 'react'

const Counter = () => {
    const [state, setState] = useState(0);
  return (
    <div>

        
     <button onClick={()=> {if (state>0) setState(state-1) }   }>Less</button> 
      <span>{state}</span>

      <button onClick={() => setState(state + 1)}>Add</button>
      
    </div>
  )
}

export default Counter
