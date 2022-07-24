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

  function handleClick() {
    const cardsAux = cards.slice();
    cardsAux.map((card) =>
      card.id === selectedCardId ? (card.isTurned = !card.isTurned) : null,
    );
    setCards(cardsAux);

    /**
     * Explicação:
     * 1 - A função checkAttempt estava sendo chamada no início dessa função
     * handleClick, porque se deixassemos ela no final, como seria o correto
     * pois é somente depois de mudar o estado que vamos verificar se acertou ou
     * não, o efeito de virar a carta parecia errado.
     * Ao clicar em uma carta ela virava normal, porém ao clicar na segunda e
     * ela não fosse a correta, o efeito de virar e a checagem de ela não ser
     * igual era tão rápido que não parecia correto, porque nossa função
     * checkAttempt verifica e caso não seja, ela vira as cartas de volta.
     * 2 - Dessa forma, pensei que um setInterval funcionaria e no caso
     * funcionou, depois de um segundo o estado da segunda carta alterado, ai
     * ele vai verificar mas o efeito de virar a carta já ocorreu.
     */
    setInterval(() => checkAttempt(), 500);
  }

  return (
    <div className={styles.cards}>
      <div
        className={
          selectedCard.isTurned
            ? styles.cardInner
            : [styles.cardInner, styles.isNotTurned].join(' ')
        }
        onClick={handleClick}
      >
        <div className={styles.cardFace}>
          <Image
            src={selectedCard.frontImage}
            alt={selectedCard.altImage}
            width={160}
            height={200}
          />
        </div>
        <div className={[styles.cardFace, styles.cardFaceBack].join(' ')}>
          <Image
            src="/assets/card-images/background.jpg"
            alt="back"
            width={160}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
