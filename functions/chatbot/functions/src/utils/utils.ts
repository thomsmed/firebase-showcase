/* eslint-disable no-unused-vars */
import {Content} from "../models/Content";
import {Message} from "../models/Message";

export const createBotMessage = (content: Content) => {
  return <Message> {
    body: content.text || "<undefined>",
    img: content.img || null,
    bot: true,
  };
};
