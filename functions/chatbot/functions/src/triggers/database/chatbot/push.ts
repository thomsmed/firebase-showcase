/* eslint-disable no-unused-vars */
import * as admin from "firebase-admin";
import {Content} from "../../../models/Content";

admin.initializeApp();

const quotes = [
  "Have a nice day! 😊",
  "I belive in you! 😘",
  "You got this! 😎",
  "Stay strong! 💪",
  "You're awesome! 🤩",
];

const push = (fcmToken?: string) => {
  if (!fcmToken) {
    return Promise.resolve(<Content> {
      text: "Aaaw... 😔 You need to give me permission to show notifications",
    });
  }

  const payload = {
    notification: {
      title: "Greetings from Chatbot! 👋",
      body: quotes[Math.floor(Math.random() * quotes.length)],
      icon: "/robot.png",
    },
  };

  return admin.messaging().sendToDevice(fcmToken, payload)
      .then(() => Promise.resolve(<Content> {
        text: "I've just sendt you a push! 👍",
      }));
};

export default push;
