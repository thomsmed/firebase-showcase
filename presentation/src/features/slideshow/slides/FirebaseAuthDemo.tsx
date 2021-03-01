import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import BaseSlide from './BaseSlide';
import LoginUI from 'components/login';
import { useAuth } from 'providers/AuthProvider';
import { Animated } from 'animation';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border: none;
  border-radius: 50%;
`;

const FirebaseAuthDemo = () => {
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
            ? (
              <Wrapper>
                {
                  signedInUser.photoURL && (
                    <Animated animationIn="fadeInUp" animationInDelay={0.5} animationInDuration={0.5} isVisible={true}>
                      <ProfileImg className="shadow" src={signedInUser.photoURL} />
                    </Animated>
                  )
                }
                <p>Hi there, {signedInUser.displayName}!</p>
                <button onClick={() => auth.signOut()}>Sign out</button>
              </Wrapper>
            )
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

export default FirebaseAuthDemo;
