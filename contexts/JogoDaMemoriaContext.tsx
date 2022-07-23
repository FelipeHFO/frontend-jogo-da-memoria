import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import initialCardsState from '../data/cards';

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
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
  checkAttempt: () => void;
  points?: number;
  setPoints?: Dispatch<SetStateAction<number>>;
  numberOfPlays?: number;
  setNumberOfPlays?: Dispatch<SetStateAction<number>>;
  numberOfErrors?: number;
  setNumberOfErrors?: Dispatch<SetStateAction<number>>;
};

export const JogoDaMemoriaContext = createContext({} as JogoDaMemoriaType);

export const JogoDaMemoriaProvider = ({ children }) => {
  const [cards, setCards] = useState(initialCardsState);
  const [points, setPoints] = useState(0);
  const [numberOfPlays, setNumberOfPlays] = useState(0);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [time, setTime] = useState('');

  // Função que vira todas cartas para baixo, exceto as encontradas
  function flipAllCardsDown() {
    const cardsAux = cards.slice();
    cardsAux.map((card) =>
      card.wasDiscovered !== true ? (card.isTurned = false) : null,
    );
  }

  // Função que verifica se acertou ou errou a jogada
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
          selectedCards = [];
        } else {
          flipAllCardsDown();
        }
      }
    });
  }

  // Efeito para contar as pontuações
  useEffect(() => {
    let selectedCards = [];
    checkAttempt();
    cards.map((card) => {
      if (card.isTurned && card.wasDiscovered != true) selectedCards.push(card);

      if (selectedCards.length === 2) {
        if (selectedCards[0]?.frontImage === selectedCards[1]?.frontImage) {
          setPoints(points + 1);
          selectedCards = [];
        } else {
          setNumberOfErrors(numberOfErrors + 1);
        }
        setNumberOfPlays(numberOfPlays + 1);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  return (
    <JogoDaMemoriaContext.Provider
      value={{
        cards,
        setCards,
        time,
        setTime,
        points,
        setPoints,
        numberOfPlays,
        setNumberOfPlays,
        numberOfErrors,
        setNumberOfErrors,
        checkAttempt,
      }}
    >
      {children}
    </JogoDaMemoriaContext.Provider>
  );
};
