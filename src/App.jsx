import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Hello from './pages/Hello'
import Hai from './pages/Hai'
import Sample from './pages/Sample'
import { ContextReduce } from './pages/context'




function App() {
  // const person = {
  //   name: "swetha",
  //   age: 33,
  //   place:"kannur"
  // }
  // localStorage.setItem("swetha", JSON.stringify(person))
  // const data = localStorage.getItem("swetha")
  // console.log("local",JSON.parse(data))


  const display = createBrowserRouter([
    {path: "/",
      element: <Sample/>
    },
    {path:"/hai",
      element: <Hai/>

    },
    {path: '/hello',
      element: <Hello/>
    }])


  return (
    <div>


    <ContextReduce>
    <RouterProvider router={display}></RouterProvider>
    </ContextReduce>
  

    </div>
  )
}

export default App