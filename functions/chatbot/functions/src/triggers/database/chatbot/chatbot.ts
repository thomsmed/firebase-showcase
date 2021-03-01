/* eslint-disable no-unused-vars */
import * as functions from "firebase-functions";
import {createBotMessage} from "../../../utils/utils";
import {Message} from "../../../models/Message";
import {Content} from "../../../models/Content";
import {Commando, extractCommando} from "./commando";
import hello from "./hello";
import echo from "./echo";
import dog from "./dog";
import cat from "./cat";
import advice from "./advice";
import fact from "./fact";
import push from "./push";

const chatbot = functions.region("europe-west1")
    .database.ref("/chats/{userId}/messages/{messageId}")
    .onCreate((snapshot, context) => {
      const userId = context.params.userId;
      const messageId = context.params.messageId;

      const message: Message = snapshot.val();

      if (message.bot || !message.body) {
        return Promise.resolve();
      }

      const commando = extractCommando(message.body) || Commando.Echo;

      functions.logger.info("Execute commando", {
        userId: userId,
        messageId: messageId,
        commando: commando,
      });

      let contentPromise: Promise<Content>;
      switch (commando) {
        case Commando.Hello:
          contentPromise = hello();
          break;
        case Commando.Dog:
          contentPromise = dog();
          break;
        case Commando.Cat:
          contentPromise = cat();
          break;
        case Commando.Advice:
          contentPromise = advice();
          break;
        case Commando.Fact:
          contentPromise = fact();
          break;
        case Commando.Push:
          contentPromise = push(message.fcmToken);
          break;
        default:
          contentPromise = echo(message.body);
          break;
      }

      const root = snapshot.ref.root;
      const messagesRef = root.child(`/chats/${userId}/messages`).push();
      return contentPromise.then((content) => {
        const botMessage = createBotMessage(content);
        return messagesRef.set(botMessage);
      });
    });

export default chatbot;
