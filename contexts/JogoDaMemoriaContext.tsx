import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import initialState from '../data/dados';

type CardType = {
  id: number;
  wasDiscovered: boolean;
  isTurned: boolean;
  frontImage: string;
  altImage?: string;
};

type JogoDaMemoriaType = {
  cards: CardType[];
  setCards: Dispatch<SetStateAction<CardType[]>>;
  checkAttempt: () => void;
  points?: number;
  setPoints?: Dispatch<SetStateAction<number>>;
  numberOfPlays?: number;
  setNumberOfPlays?: Dispatch<SetStateAction<number>>;
  numberOfErrors?: number;
  time?: Date;
};

export const JogoDaMemoriaContext = createContext({} as JogoDaMemoriaType);

export const JogoDaMemoriaProvider = ({ children }) => {
  const [cards, setCards] = useState(initialState);
  const [points, setPoints] = useState(0);
  const [numberOfPlays, setNumberOfPlays] = useState(0);

  function flipAllCardsDown() {
    const cardsAux = cards.slice();
    cardsAux.map((card) =>
      card.wasDiscovered !== true ? (card.isTurned = false) : null,
    );
  }

  function checkAttempt() {
    const cardsAux = cards.slice();
    let selectedCards = [];

    cardsAux.map((card) => {
      if (card.isTurned && card.wasDiscovered != true) selectedCards.push(card);

      if (selectedCards.length === 2) {
        if (selectedCards[0]?.frontImage === selectedCards[1]?.frontImage) {
          cardsAux.map((card) => {
            selectedCards.map((selectedCard) =>
              card.frontImage === selectedCard.frontImage
                ? (card.wasDiscovered = true)
                : null,
            );
          });
          setCards(cardsAux);
          //setPoints(points + 1);
          selectedCards = [];
        } else {
          flipAllCardsDown();
        }
        //setNumberOfPlays(numberOfPlays + 1);
      }
    });
  }

  useEffect(() => {
    let selectedCards = [];
    cards.map((card) => {
      if (card.isTurned && card.wasDiscovered != true) selectedCards.push(card);

      if (selectedCards.length === 2) {
        if (selectedCards[0]?.frontImage === selectedCards[1]?.frontImage) {
          setPoints(points + 1);
          selectedCards = [];
        }
        setNumberOfPlays(numberOfPlays + 1);
      }
    });
  }, [cards]);

  return (
    <JogoDaMemoriaContext.Provider
      value={{
        cards,
        setCards,
        points,
        setPoints,
        numberOfPlays,
        setNumberOfPlays,
        checkAttempt,
      }}
    >
      {children}
    </JogoDaMemoriaContext.Provider>
  );
};
