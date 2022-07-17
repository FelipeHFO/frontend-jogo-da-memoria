import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import styles from './Scores.module.css';

const Scores = () => {
  const { points, numberOfPlays, numberOfErrors } = useJogoDaMemoria();

  return (
    <div className={styles.scores}>
      <h1>Pontos: {points}</h1>
      <h1>Número de Jogadas: {numberOfPlays}</h1>
      <h1>Erros: {numberOfErrors}</h1>

      <button type="button">Jogar novamente</button>
      <button type="button">Sair</button>
    </div>
  );
};

export default Scores;
