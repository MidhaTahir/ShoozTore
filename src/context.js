import React, { createContext } from 'react'
import { SHOES } from "./SHOES";

const DATA = SHOES

export const MyContext = createContext(0);

const ContextProvider = ({ children }) => {

    const value = { 
        DATA
    }
    
    return (
        <div>
            <MyContext.Provider value={value}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default ContextProvider
