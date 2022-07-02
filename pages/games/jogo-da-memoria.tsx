import Header from 'components/Header/Header';
import styles from './jogo-da-memoria.module.css';

const JogoDaMemoria = () => {
  return (
    <div className={styles.container}>
      <Header title="Jogo da Memória" />

      <main className={styles.main}>
        <div className={styles.cards} />
        <div className={styles.cards} />
        <div className={styles.cards} />
        <div className={styles.cards} />
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
