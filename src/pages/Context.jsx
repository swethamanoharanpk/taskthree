import { createContext, useEffect, useReducer } from "react";

export const AppContext = createContext()


const initialValue = {
   datas: JSON.parse(localStorage.getItem("swetha"))|| null
}


function display(state, action) {
   console.log("action value", action)
   return {datas:action}

}
export const ContextReduce = ({ children }) => {

   const [state, dispatch] = useReducer(display, initialValue)
   
   console.log("222222", state.datas);

   useEffect(()=>{
      localStorage.setItem("swetha",JSON.stringify(state.datas))
   },[state.datas])

   return (
      <AppContext.Provider value={{ dispatch, sendData:state.datas }}>
         {children}
      </AppContext.Provider>
   )

}

