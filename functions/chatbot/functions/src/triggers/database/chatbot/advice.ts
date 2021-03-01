/* eslint-disable no-unused-vars */
import fetch, {Response} from "node-fetch";
import {Content} from "../../../models/Content";
import {RandomAdvice} from "../../../models/RandomAdvice";

const randomAdviceUrl = "https://api.adviceslip.com/advice";

const advice = () => {
  return fetch(randomAdviceUrl)
      .then((res: Response) => res.json())
      .then((data: RandomAdvice) => Promise.resolve(<Content> {
        text: data.slip.advice,
      }));
};

export default advice;
