import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useDb } from 'providers/DbProvider';
import Message from './Message';
import Chat from './Chat';
import { useMessaging } from 'providers/MessagingProvider';
import firebaseConfig from 'firebase-config.json';

export interface ChatContainerProps {
  user: firebase.User;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ user }) => {
  const [ messages, setMessages ] = useState<Message[]>([]);
  const [ botIsThinking, setBotIsThinking ] = useState<boolean>(true);
  const db = useDb();
  const messaging = useMessaging();

  useEffect(() => {
    if (!db || !messaging) {
      return;
    }

    const activeRef = db.ref(`/chats/${user.uid}/active`);
    const messagesRef = db.ref(`/chats/${user.uid}/messages`);
    
    activeRef.onDisconnect().set(null);
    messagesRef.onDisconnect().set(null);
    
    activeRef.set(true).then(() => {
      messagesRef.on('child_added', (snapshot) => {
        setMessages((messages) => {
          const message = snapshot.val();
          setBotIsThinking(!message.bot)
          return messages.concat([message]);
        });
      });
    });

    const unsubscribeFromPush = messaging.onMessage((payload) => {
      const title = payload.notification.title;
      const body = payload.notification.body;
      const icon = payload.notification.icon;
      const notification = new Notification(title, {
        body: body,
        icon: icon,
      });
    });
    
    return () => {
      messagesRef.off();
      unsubscribeFromPush();
    }
  }, [db, messaging, user]);

  const postMessage = (message: Message) => {
    if (!db || !messaging) {
      return;
    }

    const messagesRef = db.ref(`/chats/${user.uid}/messages`).push();
    const bodyAsLowerCase = (message.body || '').toLowerCase();
    if (bodyAsLowerCase.indexOf('push') < 0) {
      messagesRef.set(message);
    } else {
      messaging.getToken({ vapidKey: firebaseConfig.vapidKey }).then((currentToken) => {
        message.fcmToken = currentToken;
        return messagesRef.set(message);
      });
    }
  }

  return (
    <Chat user={user} messages={messages} botIsThinking={botIsThinking} postMessage={postMessage} />
  );
}

export default ChatContainer;
