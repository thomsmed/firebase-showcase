/* eslint-disable no-unused-vars */
import fetch, {Response} from "node-fetch";
import {Content} from "../../../models/Content";
import {RandomCat} from "../../../models/RandomCat";

const randomCatUrl = "https://api.thecatapi.com/v1/images/search";

const cat = () => {
  return fetch(randomCatUrl)
      .then((res: Response) => res.json())
      .then((data: RandomCat[]) => Promise.resolve(<Content> {
        text: "Here is a random cat 😺",
        img: data[0].url,
      }));
};

export default cat;
