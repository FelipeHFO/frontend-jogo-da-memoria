/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const Stopwatch = () => {
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

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  function restart() {
    window.location.reload();
  }

  return (
    <div>
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
