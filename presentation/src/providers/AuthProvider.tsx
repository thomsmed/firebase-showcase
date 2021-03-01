import React, { createContext, useContext } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseApp from './firebaseApp';

const auth = firebaseApp.auth();

const AuthContext = createContext<firebase.auth.Auth | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

interface AuthProviderProps {
  children?: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
}

export {
  AuthProvider as default,
  useAuth,
}
