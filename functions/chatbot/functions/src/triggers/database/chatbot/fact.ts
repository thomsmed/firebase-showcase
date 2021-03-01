/* eslint-disable no-unused-vars */
import fetch, {Response} from "node-fetch";
import {Content} from "../../../models/Content";
import {RandomFact} from "../../../models/RandomFact";

const randomFactUrl = "https://uselessfacts.jsph.pl/random.json?language=en";

const fact = () => {
  return fetch(randomFactUrl)
      .then((res: Response) => res.json())
      .then((data: RandomFact) => Promise.resolve(<Content> {
        text: data.text,
      }));
};

export default fact;
