import React, { useContext } from 'react'
import { AppContext } from './Context'


function Hello() {
  const {sendData,dispatch} = useContext(AppContext)
  console.log("hello", sendData)
  
  function removeData(){
    dispatch([])
  }

  return (
    <div>
    {sendData.map((li)=>{
      return(
      
      <h4>{li.name}</h4>
      )
      
  })}

   <button onClick={removeData}>Remove</button>

    </div>
  )
}

export default Hello