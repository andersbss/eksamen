import React, { createContext, useContext, useState, useEffect } from 'react';
import { request } from '../services/httpService';

const Context = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      if (!user) {
        setLoading(true);
        const {
          data: { success, data },
        } = await request('GET', '/me');
        if (success) setUser(data);
        else setUser(null);
        setLoading(false);
      }
    };
    loadUserData();
  }, [user]);

  const contextValues = {
    userLoading,
    isAdmin: user?.role === 'admin',
    loggedIn: !!user,
    user,
    setUser,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export const useUserContext = () => useContext(Context);

export default UserContext;
