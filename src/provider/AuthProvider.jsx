import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Hablu mia ',
        email: "hablu@gmail.com"
    });
    const AuthData = {
        user,
        setUser
    }
    return <AuthContext value={AuthData}>
        {children}
    </AuthContext>
};

export default AuthProvider;