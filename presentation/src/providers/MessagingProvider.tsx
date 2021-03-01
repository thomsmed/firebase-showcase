import React, { createContext, useContext } from 'react';
import firebase from 'firebase';
import 'firebase/messaging';
import firebaseApp from './firebaseApp';

const messaging = firebaseApp.messaging();

const MessagingContext = createContext<firebase.messaging.Messaging | undefined>(undefined);
MessagingContext.displayName = 'MessagingContext';

interface MessagingProviderProps {
  children?: React.ReactNode;
}

const MessagingProvider: React.FC<MessagingProviderProps> = ({ children }) => {
  return (
    <MessagingContext.Provider value={messaging}>
      {children}
    </MessagingContext.Provider>
  );
}

const useMessaging = () => {
  return useContext(MessagingContext);
}

export {
  MessagingProvider as default,
  useMessaging,
}
