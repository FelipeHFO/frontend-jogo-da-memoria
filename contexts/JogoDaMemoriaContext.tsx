import { createContext, Dispatch, SetStateAction, useState } from 'react';
import initialState from '../data/dados';

type CardType = {
    id: number;
    wasDiscovered: boolean;
    isTurned: boolean;
    frontImage: string;
    altImage?: string;
}

type JogoDaMemoriaType = {
  cards: CardType[];
  setCards: Dispatch<SetStateAction<CardType[]>>
  checkAttempt: () => void;
  points?: number;
  numberOfPlays?: number;
  numberOfErrors?: number;
  time?: Date;

};

export const JogoDaMemoriaContext = createContext({} as JogoDaMemoriaType);

export const JogoDaMemoriaProvider = ({ children }) => {
  const [cards, setCards] = useState(initialState);

  function flipAllCardsDown() {
    const cardsAux = cards.slice();
    cardsAux.map((card) => card.wasDiscovered !== true ? card.isTurned = false : null)
  }

  function checkAttempt() {
    const cardsAux = cards.slice();
    const selectedCards = cardsAux.filter((card) => card.isTurned === true);
    
    if(selectedCards.length === 2){        
        if(selectedCards[0]?.frontImage === selectedCards[1]?.frontImage){            
            selectedCards.map((card) => card.wasDiscovered = true);
            console.log(selectedCards);
        }else {
            flipAllCardsDown();
        }
    }
  }

  return (
    <JogoDaMemoriaContext.Provider value={{ cards, setCards, checkAttempt }}>
      {children}
    </JogoDaMemoriaContext.Provider>
  );
};
