import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import { useRouter } from 'next/router';
import styles from './Scores.module.css';

const Scores = () => {
  const { points, numberOfPlays, numberOfErrors } = useJogoDaMemoria();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.scores}>
        <h1>Pontos: {points}</h1>
        <h1>Número de Jogadas: {numberOfPlays}</h1>
        <h1>Erros: {numberOfErrors}</h1>

        <button type="button" onClick={() => window.location.reload()}>
          Jogar novamente
        </button>
        <button
          type="button"
          onClick={() => {
            router.push('/games');
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default Scores;
