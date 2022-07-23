import { JogoDaMemoriaProvider } from 'contexts/JogoDaMemoriaContext';
import styles from './jogo-da-memoria.module.css';
import Header from 'components/Header/Header';
import Table from 'components/Table/Table';
import Scores from 'components/Scores/Scores';
import Stopwatch from 'components/Stopwatch/Stopwatch';

const JogoDaMemoria = () => {
  return (
    <JogoDaMemoriaProvider>
      <div className={styles.container}>
        <Header text="Jogo da Memória" page="jogo-da-memoria" />

        <Table />

        {/* <Scores /> */}
        <Stopwatch />
      </div>
    </JogoDaMemoriaProvider>
  );
};

export default JogoDaMemoria;
