//Help and Source of this auth: https://usehooks.com/useAuth/

import React, { useState, useEffect, useContext, createContext } from "react";
import { Redirect } from "react-router-dom";

var users = new Map();
users.set('email@gmail.com', 'root');

const authContext = createContext();

//This wraps your app and makes auth objects
//  available to child componenets
export function ProvideAuth({children}){
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

//Hook for child componenets to get the Auth object
export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [isUserEmp, setIsUserEmp] = useState(false);

    const signIn = (email, password, isEmp) =>{
        if(users.has(email)){
            if(users.get(email) == password){
                setUser(true);
            }
            else{
                console.log('Password does not match')
            }
        }
        else{
            console.log('Email not found');
        }

        setIsUserEmp(isEmp);

    }

    const signUp = (email, password, isEmp) => {
        var ret = false;
        if(!users.has(email)){
            users.set(email, password);
            setUser(true);
            ret = true;
        }
        else{
            ret = false;
        }
        setIsUserEmp(isEmp);

        return ret;

    }

    const signOut = () => {
        setUser(false);
    }

    useEffect(() => {
        const authStateChange = () => {
            if(user){
                setUser(user);
            }
            else{
                setUser(false);
            }
        }

        return () => authStateChange();
    }, []);

    return {
        user,
        isUserEmp,
        signIn,
        signOut,
        signUp
    };
}


