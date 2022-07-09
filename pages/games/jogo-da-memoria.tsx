import styles from './jogo-da-memoria.module.css';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import { cards } from '../../components/Card/dados';
import { useEffect, useState } from 'react';

const JogoDaMemoria = () => {
  const [cardsState, setCardsState] = useState([]);
  const guess = [];

  useEffect(() => {
    setCardsState(cards);
  }, [cards]);

  return (
    <div className={styles.container}>
      <Header title="Jogo da Memória" />

      <main className={styles.main}>
        {cardsState.map((item) => (
          <Card 
            key={item.id}
            id={item.id}
            guess={guess}
          />
        ))}
      </main>

      <aside className={styles.aside}>
        <h1>Pontos: </h1>
        <h1>Tempo: </h1>
        <h1>Número de Jogadas: </h1>
        <h1>Erros: </h1>

        <div>
          <button>Pausar</button>
          <button>Resetar</button>
        </div>
      </aside>
    </div>
  );
};

export default JogoDaMemoria;
