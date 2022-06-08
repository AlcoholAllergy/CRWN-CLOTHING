import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

//initial context value
const initialContextValue = {
  currentUser: null,
  setCurrentUser: () => null,
};

//as the actual value you want to access
export const UserContext = createContext(initialContextValue);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
