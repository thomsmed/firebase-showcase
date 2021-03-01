/* eslint-disable no-unused-vars */
import {Content} from "../../../models/Content";

const echo = (text: string) => {
  return Promise.resolve(<Content> {
    text: `You said: "${text}"`,
  });
};

export default echo;
