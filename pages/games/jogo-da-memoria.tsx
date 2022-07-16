import { JogoDaMemoriaProvider } from 'contexts/JogoDaMemoriaContext';
import styles from './jogo-da-memoria.module.css';
import Header from 'components/Header/Header';
import Table from 'components/Table/Table';
import Aside from 'components/Aside/Aside';

const JogoDaMemoria = () => {
  return (
    <JogoDaMemoriaProvider>
      <div className={styles.container}>
        <Header title="Jogo da Memória" />

        <Table />

        <Aside />
      </div>
    </JogoDaMemoriaProvider>
  );
};

export default JogoDaMemoria;
