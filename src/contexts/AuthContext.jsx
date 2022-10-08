
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const _isAuth = localStorage.getItem('isAuth');
    const _token = localStorage.getItem('access_token');

    const [isAuth, setIsAuth] = useState(_isAuth ? _isAuth === 'true' : false);
    const [token, setToken] = useState(_token || '');

    const loginUser = (token) => {
        setIsAuth(true);
        setToken(token);
        localStorage.setItem('isAuth', String(true));
        localStorage.setItem('access_token', token);
    }

    const logOut = () => {
        setIsAuth(false);
        setToken('');
        localStorage.setItem('isAuth', String(false));
        localStorage.setItem('token', '');
    }

    return (
        <AuthContext.Provider value={{
            isAuth, token, loginUser, logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;