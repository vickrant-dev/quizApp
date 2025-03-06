import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const storedUserData = localStorage.getItem("user-data");
    const [userData, setUserData] = useState(storedUserData ? JSON.parse(storedUserData) : null);

    useEffect(() => {
        if(userData) {
            localStorage.setItem("user-data", JSON.stringify(userData));
        }
    }, [userData]);

    return (
        <UserContext.Provider value={{userData, setUserData}} >
            {children}
        </UserContext.Provider>
    )

}