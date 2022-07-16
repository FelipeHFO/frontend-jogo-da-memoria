import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import styles from './Aside.module.css';

const Aside = () => {
  const { points, numberOfPlays } = useJogoDaMemoria();

  return (
    <aside className={styles.aside}>
      <h1>Pontos: {points}</h1>
      <h1>Tempo: </h1>
      <h1>Número de Jogadas: {numberOfPlays}</h1>
      <h1>Erros: </h1>

      <div>
        <button>Pausar</button>
        <button>Resetar</button>
      </div>
    </aside>
  );
};

export default Aside;
