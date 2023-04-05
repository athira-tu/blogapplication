import React, { createContext } from "react";
export const UserContext = createContext();
import { useState } from "react";
import { useEffect } from "react";

const UserProvider = ({ children }) => {


    const [loggedinuser, setloggedinuser] = useState()
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('loggedinuser'))


        console.log("user is from local storage", user);
        setloggedinuser(user)
    }, [])

    return (
        <UserContext.Provider value={{ loggedinuser, setloggedinuser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider