import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Pass from "./components/Pass/Pass";
import Props from "./components/Props/Props";


function App() {


  const [state, setState] = useState(0);


  return (
    <div className="App">

     
<Counter state={state} setState={setState} />
<Pass state= {state} />
<Props name="Ajay" age={32}/>
    </div>
  );
}

export default App; 
