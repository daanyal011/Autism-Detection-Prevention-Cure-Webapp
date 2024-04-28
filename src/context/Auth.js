import React, { useEffect, useState } from 'react';
import fire from '../config/Fire';
import  Loader  from '../common/Loader/Loader';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);


  if(loading){
    return <Loader />
  }


  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
