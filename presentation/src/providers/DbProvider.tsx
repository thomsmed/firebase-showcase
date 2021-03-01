import React, { createContext, useContext } from 'react';
import firebase from 'firebase';
import 'firebase/database';
import firebaseApp from './firebaseApp';

const db = firebaseApp.database();

const DbContext = createContext<firebase.database.Database | undefined>(undefined);
DbContext.displayName = 'DbContext';

interface DbProviderProps {
  children?: React.ReactNode;
}

const DbProvider: React.FC<DbProviderProps> = ({ children }) => {
  return (
    <DbContext.Provider value={db}>
      {children}
    </DbContext.Provider>
  );
}

const useDb = () => {
  return useContext(DbContext);
}

export {
  DbProvider as default,
  useDb,
}
