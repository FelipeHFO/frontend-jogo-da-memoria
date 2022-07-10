import Card from 'components/Card/Card';
import styles from './Table.module.css';
import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import { useEffect } from 'react';

const Table = () => {
  const { cards, setCards } = useJogoDaMemoria();

  useEffect(() => {
    const cardsAux = cards.slice();
    cardsAux.sort(() => Math.random() - 0.5);
    setCards(cardsAux);
  }, []);

  return (
    <main className={styles.main}>
      {cards?.map((item) => (
        <Card key={item.id} id={item.id} />
      ))}
    </main>
  );
};

export default Table;
