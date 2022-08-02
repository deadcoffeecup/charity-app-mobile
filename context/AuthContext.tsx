import { createContext, useContext } from 'react';
import { User, UserCredential } from 'firebase/auth';

export type AuthContextType = {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<UserCredential | void>;
  login: (email: string, password: string) => Promise<UserCredential | void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const useAuth = () => {
  return useContext(AuthContext);
};
