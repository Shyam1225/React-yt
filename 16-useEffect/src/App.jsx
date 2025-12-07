import React from 'react'
import { useState , useEffect } from 'react';

const App = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aCanhging() {
    console.log("a is changing"); 
  }

  function bCanhging() {
    console.log("b is changing"); 
  }
  
  useEffect(function () {
    aCanhging();
  }, [a]);

  useEffect(function () {
    bCanhging();
  }, [b]);

  return (
    <div>
      <h1>A: {a}</h1>
      <h1>B: {b}</h1>
      <button onClick={() => {setA(a+1)}}>Change A</button>
      <button onClick={() => {setB(b-1)}}>Change B</button>
    </div>
  )
}

export default App