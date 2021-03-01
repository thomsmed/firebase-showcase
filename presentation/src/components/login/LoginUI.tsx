import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirebaseUIContainer = styled.div`
  // Fixing Paper.css overrides:

  li {
    text-indent: inherit;
  }

  li::before {
    content: none;
  }

  .mdl-button:hover {
    transform: none;
    box-shadow: none;
  }
`;

const LoadingText = styled.h5`
  text-align: center;
`;

interface LoginUIProps {
  auth?: firebase.auth.Auth;
}

const LoginUI: React.FC<LoginUIProps>  = ({ auth }) => {
  const [ authUiError, setAuthUiError ] = useState<firebaseui.auth.AuthUIError | null>(null);
  const [ uiShown, setUiShown ] = useState<boolean>(false);
  useEffect(() => {
    const config: firebaseui.auth.Config = {
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false,
        signInFailure: (authUiError: firebaseui.auth.AuthUIError) => {
          return Promise.resolve(setAuthUiError(authUiError));
        },
        uiShown: () => setUiShown(true)
      },
    };
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-container', config);
  }, [auth]);

  return (
    <Wrapper>
      <h4>Sign in to continue</h4>
      <FirebaseUIContainer id="firebaseui-container">
        <LoadingText hidden={uiShown}>Loading...</LoadingText>
      </FirebaseUIContainer>
      {
        authUiError && (
          <div>
            <input className="alert-state" id="error-alert" type="checkbox" />
            <div className="alert alert-danger dismissible">
              {JSON.stringify(authUiError)}
              <label className="btn-close" htmlFor="error-alert">X</label>
            </div>
          </div>
        )
      }
    </Wrapper>
  );
}

export default LoginUI;
