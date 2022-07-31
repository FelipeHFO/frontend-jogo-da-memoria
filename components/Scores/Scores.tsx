import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import { useRouter } from 'next/router';
import styles from './Scores.module.css';

const Scores = () => {
  const { time, points, numberOfPlays, numberOfErrors } = useJogoDaMemoria();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.scores}>
        <h1>Tempo: {time}</h1>
        <h1>Pontos: {points}</h1>
        <h1>Número de Jogadas: {numberOfPlays}</h1>
        <h1>Erros: {numberOfErrors}</h1>

        <div className={styles.containerButtons}>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className={styles.button}
          >
            Jogar novamente
          </button>
          <button
            type="button"
            onClick={() => {
              router.push('/games');
            }}
            className={styles.button}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scores;
