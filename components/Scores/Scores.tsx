import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import { useEffect, useRef } from 'react';
import styles from './Scores.module.css';

const Scores = () => {
  const { time, points, numberOfPlays, numberOfErrors } = useJogoDaMemoria();
  const hasSaved = useRef(false);

  useEffect(() => {
    if (points > 0 && !hasSaved.current) {
      const stored = localStorage.getItem('highScores');
      let scores = stored ? JSON.parse(stored) : [];

      scores.push({
        points,
        time,
        plays: numberOfPlays,
        errors: numberOfErrors,
      });

      if (scores.length >= 100) {
        scores = [];
      }

      localStorage.setItem('highScores', JSON.stringify(scores));
      hasSaved.current = true;
    }
  }, [points, time, numberOfPlays, numberOfErrors]);

  return (
    <div className={styles.container}>
      <div className={styles.scores}>
        <h1>🎉 Fim do Jogo! 🎉</h1>
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
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scores;
