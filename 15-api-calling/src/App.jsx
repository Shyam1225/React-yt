import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {

  const [data,setData]=useState([]);
 
  const fetchdata = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await data.json();
    console.log(res);
  };

  const axiosdata1 = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(data);
  };

  const axiosdata2 = async () => {

    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);

    setData(response.data);
  };

  return (
    <>
    <div>
      <button onClick={fetchdata}>Fetch</button>
      <button onClick={axiosdata1}>Axios1</button>
      <button onClick={axiosdata2}>Axios2</button>

      <div>
        {data.map(function(elem,idx){
          return <h3>{elem.author} {idx}</h3>  
        })}
      </div>

    </div>
    </>
  );
};

export default App;
