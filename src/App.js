import React, { useState } from 'react';
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';
import "./App.css"

function App() {
  const [func, setFunc] = useState(true)
  const [_class, setClass] = useState(true)
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="delFunc" onClick={() => {
        setFunc(false)
      }} />
      <input type="button" value="delClass" onClick={() => {
        setClass(false)
      }} />
      {func ? <FuncComp initNum={2} /> : null}
      {_class ? <ClassComp initNum={2} /> : null}
    </div>
  );
}

export default App;
