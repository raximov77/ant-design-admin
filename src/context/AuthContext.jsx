import { createContext, useState } from "react";

export const Context = createContext()

export const AuthContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null) 
    const [register, setRegister] = useState(null) 
   
    localStorage.setItem("token", JSON.stringify(token))
    return(
        <Context.Provider value={{token, setToken, register, setRegister}}>{children}</Context.Provider>
    )    
}