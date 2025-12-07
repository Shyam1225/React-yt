import React from 'react'

const App = () => {

  const user = {
    username: "Nipa",
    age: 46,
    city: "Una"
  }

  localStorage.setItem("user", JSON.stringify(user))
  const data = JSON.parse(localStorage.getItem("user"))
  console.log(data);

  return (
    <div>App</div>
  )
}

export default App