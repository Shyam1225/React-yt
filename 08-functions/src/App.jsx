import React from 'react'

const App = () => {

  function inputChange(val) {
    console.log(val)
  }

  return (
    <div>
      <h1>Hello Shyam</h1>
      <input onChange={function(elem) {
        console.log(elem.target.value)
      }}type="text" placeholder="Enter your name" />
    </div>
  )
}

export default App