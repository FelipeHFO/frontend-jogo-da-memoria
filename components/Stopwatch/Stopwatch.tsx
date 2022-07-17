import { useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState<any>();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms;
  let updatedS = time.s;
  let updatedM = time.m;
  let updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <div>
      <div>
        <span>{time.h >= 10 ? time.h : '0' + time.h}</span>&nbsp;:&nbsp;
        <span>{time.m >= 10 ? time.m : '0' + time.m}</span>&nbsp;:&nbsp;
        <span>{time.s >= 10 ? time.s : '0' + time.s}</span>
      </div>

      <div>
        {status === 0 ? <button onClick={start}>Start</button> : ''}

        {status === 1 ? (
          <div>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        ) : null}

        {status === 2 ? (
          <div>
            <button onClick={resume}>Resume</button>
            <button onClick={reset}>Reset</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Stopwatch;
