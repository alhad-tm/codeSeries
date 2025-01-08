import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">

     <button onClick={()=> {if (state>0) setState(state-1) }   }></button> 
      <span>{state}</span>

      <button onClick={() => setState(state + 1)}>Add</button>
    </div>
  );
}

export default App; 
