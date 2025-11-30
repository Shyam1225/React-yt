import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);  
  const [user, setUser] = useState({name:"Shyam", age:20 });

  const btnclick = () => {
    setUser(prev=>({...prev, age:50}))
}


  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }

  return (
    <div>
      <h2>{num}</h2>  
      <button onClick={btnClicked}>click</button>
      <h1>{user.name} {user.age}</h1>
      <button onClick={btnclick}>click</button>


    </div>
  )
}

export default App