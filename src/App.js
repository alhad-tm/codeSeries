import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Pass from "./components/Pass/Pass";


function App() {


  const [state, setState] = useState(0);


  return (
    <div className="App">

     
<Counter states={state} setState={setState}/>
<Pass state= {state} />
    </div>
  );
}

export default App; 
