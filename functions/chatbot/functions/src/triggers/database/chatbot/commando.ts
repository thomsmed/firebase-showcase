/* eslint-disable no-unused-vars */

export const extractCommando = (text: string = "") => {
  const lowerCasedText = text.toLowerCase();

  let extractedCommando = null;
  for (const commando of Object.values(Commando)) {
    if (lowerCasedText.indexOf(commando) > -1) {
      extractedCommando = commando;
      break;
    }
  }

  return extractedCommando;
};

export enum Commando {
  Echo = "echo",
  Hello = "hello",
  Dog = "dog",
  Cat = "cat",
  Advice = "advice",
  Fact = "fact",
  Push = "push",
}
