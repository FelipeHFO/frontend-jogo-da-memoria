/* eslint-disable react-hooks/exhaustive-deps */
import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import { useEffect, useState } from 'react';
import styles from './Stopwatch.module.css';

const Stopwatch = () => {
  const { isEndGame, setTime } = useJogoDaMemoria();
  const [stop, setStop] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }

      if (minutes === 59) {
        setHours(hours + 1);
        setMinutes(0);
      }
    }, 1000);

    stop ? clearInterval(timer) : null;

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if (isEndGame) {
      setStop(true);
      setTime(getTime());
      clearInterval(timer);
    }
  }, [isEndGame]);

  function restart() {
    window.location.reload();
  }

  function getTime() {
    return `
      ${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}
    `;
  }

  return (
    <div className={styles.stopwatchContainer}>
      <div>
        <h1>Tempo</h1>
        <h1>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>

      <section>
        <button type="button" onClick={restart}>
          Recomeçar
        </button>
      </section>
    </div>
  );
};

export default Stopwatch;
