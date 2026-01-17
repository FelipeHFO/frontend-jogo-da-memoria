import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useCallback,
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
  points?: number;
  setPoints?: Dispatch<SetStateAction<number>>;
  numberOfPlays?: number;
  setNumberOfPlays?: Dispatch<SetStateAction<number>>;
  numberOfErrors?: number;
  setNumberOfErrors?: Dispatch<SetStateAction<number>>;
  isEndGame?: boolean;
  checkAttempt: () => void;
};

export const JogoDaMemoriaContext = createContext({} as JogoDaMemoriaType);

export const JogoDaMemoriaProvider = ({ children }) => {
  const [cards, setCards] = useState(initialCardsState);
  const [points, setPoints] = useState(0);
  const [numberOfPlays, setNumberOfPlays] = useState(0);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [isEndGame, setIsEndGame] = useState(false);
  const [time, setTime] = useState('00:00:00');

  // Função que vira todas cartas para baixo, exceto as encontradas
  function flipAllCardsDown() {
    const cardsAux = cards.slice();
    cardsAux.map((card) =>
      card.wasDiscovered !== true ? (card.isTurned = false) : null,
    );
  }

  // Função que verifica se o jogo acabou
  const checkGame = useCallback(() => {
    let remaingCards = [];
    remaingCards = cards.filter((card) => card.wasDiscovered != true);

    remaingCards.length === 0 ? setIsEndGame(true) : null;
  }, [cards]);

  // Função que verifica se acertou ou errou a jogada
  function checkAttempt(intervalCheckAttempt = null) {
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

    intervalCheckAttempt ? clearInterval(intervalCheckAttempt) : null;
  }

  // Efeito para contar as pontuações
  useEffect(() => {
    let selectedCards = [];

    cards.map((card) => {
      if (card.isTurned && card.wasDiscovered != true) selectedCards.push(card);

      if (selectedCards.length === 2) {
        if (selectedCards[0]?.frontImage === selectedCards[1]?.frontImage) {
          setPoints(prev => prev + 1);
          selectedCards = [];
        } else {
          setNumberOfErrors(prev => prev + 1);
        }
        setNumberOfPlays(prev => prev + 1);
      }
    });

    checkGame();
  }, [cards, checkGame]);

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
        isEndGame,
        checkAttempt,
      }}
    >
      {children}
    </JogoDaMemoriaContext.Provider>
  );
};
