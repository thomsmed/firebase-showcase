// More on Service Workers:
// https://developers.google.com/web/fundamentals/primers/service-workers

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // If you are pushing data messages, use this callback to customise the notification
  
  // const notificationTitle = 'Background Message Title';
  // const notificationOptions = {
  //   body: 'Background Message body.',
  //   icon: '/favicon.ico'
  // };

  // self.registration.showNotification(notificationTitle, notificationOptions);
});
