import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)


const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;