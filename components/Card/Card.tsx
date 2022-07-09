import Image from 'next/image';
import { useState } from 'react';
import styles from './Card.module.css';
import { cards, turnAllCardsDown } from '../../components/Card/dados';

type CardProps = {
  id: number;
  guess: any[];
};

const Card = ({ id, guess }: CardProps) => {
  const [currentCardId, setCurrentCardId] = useState(id);
  const currentCard = cards.find((card) => card.id === currentCardId);
  const [visible, setVisible] = useState(currentCard.isTurned);

  function checkGuess(){
    guess.length > 1 ? null : guess.push(id);
    cards.map((card) => card.id === id ? card.isTurned = true : null);
    console.log(cards);    
    console.log(guess);
    
  }

  function handleClick(){
    !currentCard.wasDiscovered && !(guess.length > 1)  ? setVisible(!visible) : turnAllCardsDown();
    checkGuess();
  }

  return (
    <div className={styles.cards}>
      {
        visible ?
        (
          <button type='button' className={styles.front} onClick={handleClick}>
            <Image src={currentCard.frontImage} alt={currentCard.altImage} width={160} height={200}  />
          </button>
        ) : 
        (
          <button type='button' className={styles.back} onClick={handleClick}>
            <Image src="/assets/card-images/background.jpg" alt="back" width={160} height={200} />
          </button>
        )
      }
    </div>
  );
};

export default Card;
