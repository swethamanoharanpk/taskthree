import React, { useContext } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { AppContext } from './Context';

function Sample() {
  const {dispatch} = useContext(AppContext)


    function display(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
          console.log(result.data);
          dispatch(result.data)
        })
        


    }
  return (
    <div>
    <h1>sample page</h1>
    <button onClick={display}>Click</button>
    <Link to={'/hello'}><h2>Hello Page</h2></Link>
    </div>
  )
}

export default Sample