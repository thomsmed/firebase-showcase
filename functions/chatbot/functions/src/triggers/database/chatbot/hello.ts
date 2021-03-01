/* eslint-disable no-unused-vars */
import {Content} from "../../../models/Content";

const hello = () => {
  return Promise.resolve(<Content> {
    text: "Hello there!",
  });
};

export default hello;
