/* eslint-disable no-unused-vars */
import fetch, {Response} from "node-fetch";
import {Content} from "../../../models/Content";
import {RandomDog} from "../../../models/RandomDog";

const randomDogUrl = "https://dog.ceo/api/breeds/image/random";

const dog = () => {
  return fetch(randomDogUrl)
      .then((res: Response) => res.json())
      .then((data: RandomDog) => Promise.resolve(<Content> {
        text: "Her is a random dog 🐶",
        img: data.message,
      }));
};

export default dog;
