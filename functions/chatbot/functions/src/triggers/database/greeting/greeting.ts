/* eslint-disable no-unused-vars */
import * as functions from "firebase-functions";
import {Content} from "../../../models/Content";
import {createBotMessage} from "../../../utils/utils";

const greeting = functions.region("europe-west1")
    .database.ref("/chats/{userId}/active")
    .onCreate((snapshot, context) => {
      const userId = context.params.userId;

      functions.logger.info("Greet active user", {
        userId: userId,
      });

      const botMessage = createBotMessage(<Content> {
        text: "Hello, I'm Chatbot! Ask me anything.",
      });

      const root = snapshot.ref.root;
      const messagesRef = root.child(`/chats/${userId}/messages`).push();
      return messagesRef.set(botMessage);
    });

export default greeting;
