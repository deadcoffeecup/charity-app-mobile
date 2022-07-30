import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';

import { auth } from '../firebaseConfig';
import { AuthContext } from '../context/AuthContext';

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // const signup = (email: string, password: string) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };
  // const login = (email: string, password: string) => {
  //   return signInWithEmailAndPassword(auth, email, password);
  // };
  // const logout = () => {
  //   return signOut(auth);
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [currentUser]);

  // const value = {
  //   currentUser,
  //   signup,
  //   login,
  //   logout,
  // };
  return (
    <AuthContext.Provider value={currentUser}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
