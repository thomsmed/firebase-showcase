import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import BaseSlide from './BaseSlide';
import { useAuth } from 'providers/AuthProvider';
import LoginUI from 'components/login/LoginUI';
import Chat from 'components/chat';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ChatbotDemo = () => {
  const [ signedInUser, setSignedInUser ] = useState<firebase.User | null>(null);
  const [ authStateError, setAuthStateError ] = useState<firebase.auth.Error | null>(null);
  const auth = useAuth();

  useEffect(() => {
    if (!auth) {
      return;
    }

    return auth.onAuthStateChanged((user) => {
      setSignedInUser(user);
    }, (error) => {
      setAuthStateError(error);
    });
  }, [auth]);

  return (
    <BaseSlide>
      <Wrapper>
        {
          auth && signedInUser
            ? <Chat user={signedInUser} />
            : <LoginUI auth={auth} />
        }
        {
          authStateError && (
            <div>
              <input className="alert-state" id="error-alert" type="checkbox" />
              <div className="alert alert-danger dismissible">
                {authStateError.message}
                <label className="btn-close" htmlFor="error-alert">X</label>
              </div>
            </div>
          )
        }
      </Wrapper>
    </BaseSlide>
  );
}

export default ChatbotDemo;
