import React from 'react';
import ReactDOM from 'react-dom';
import 'papercss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ModeToggleProvider from 'providers/ModeToggleProvider';
import AuthProvider from 'providers/AuthProvider';
import DbProvider from 'providers/DbProvider';
import MessagingProvider from 'providers/MessagingProvider';

ReactDOM.render(
  <React.StrictMode>
    <ModeToggleProvider>
      <AuthProvider>
        <DbProvider>
          <MessagingProvider>
            <App />
          </MessagingProvider>
        </DbProvider>
      </AuthProvider>
    </ModeToggleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
