import firebase from 'firebase/app';
import firebaseConfig from 'firebase-config.json';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
