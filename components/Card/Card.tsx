import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Card.module.css';

type CardProps = {
  id: number;
};

const Card = ({ id }: CardProps) => {
  const { cards, setCards, checkAttempt } = useJogoDaMemoria();
  const [selectedCardId] = useState(id);
  let selectedCard = cards.find((card) => card.id === selectedCardId);

  function handleClick(){
    checkAttempt();
    const cardsAux = cards.slice();
    cardsAux.map((card) => card.id === selectedCardId ? card.isTurned = !card.isTurned : null)
    setCards(cardsAux);
  }

  return (
    <div className={styles.cards}>
      {
        selectedCard.isTurned ?
        (
          <button type='button' className={styles.front} onClick={handleClick}>
            <Image src={selectedCard.frontImage} alt={selectedCard.altImage} width={160} height={200}  />
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
