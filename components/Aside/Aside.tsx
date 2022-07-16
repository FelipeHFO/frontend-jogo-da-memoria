import styles from './Aside.module.css';

const Aside = () => {
  return (
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
  );
};

export default Aside;
