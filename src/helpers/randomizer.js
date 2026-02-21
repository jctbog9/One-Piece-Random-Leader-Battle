import { cardList } from '../constants/cardList';

export function randomizePlayerLeaders() {
  const first = Math.floor(Math.random() * cardList.length);
  let second = Math.floor(Math.random() * (cardList.length));

  while (second === first) {
    second = Math.floor(Math.random() * (cardList.length));
  }

  return [
    {
      cardName: cardList[first].card_name,
      cardNumber: cardList[first].card_number,
      imgSrc: cardList[first].image_url
    },
    {
      cardName: cardList[second].card_name,
      cardNumber: cardList[second].card_number,
      imgSrc: cardList[second].image_url
    },
  ];
}