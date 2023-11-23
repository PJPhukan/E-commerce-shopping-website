// import { React,createContext,useState } from "react";
import { React,createContext} from "react";
export const Context = createContext();


export default function AppContext({ children }) {
    return (
        <Context.Provider value=''>
            {children}
        </Context.Provider>
    )
}
