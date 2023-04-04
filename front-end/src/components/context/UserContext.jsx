import React, { createContext } from "react";
export const UserContext = createContext();
import { useState } from "react";

const UserProvider = ({ children }) => {

    const [loggedinuser, setloggedinuser] = useState()

    return (
        <UserContext.Provider value={{ loggedinuser, setloggedinuser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider