import styles from './jogo-da-memoria.module.css';

const JogoDaMemoria = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Jogo da Memória</h1>
      </header>

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
