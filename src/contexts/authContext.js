import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AutherContextProvider = (props) => {
    
    const [isAuthenticated,setAuth] = useState(true);
    const toggleAuth = () => { 
        setAuth(!isAuthenticated);
    }
    
    return (
        <AuthContext.Provider value={{ isAuthenticated,toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AutherContextProvider;