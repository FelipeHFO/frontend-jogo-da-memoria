import { JogoDaMemoriaProvider } from 'contexts/JogoDaMemoriaContext';
import styles from './jogo-da-memoria.module.css';
import Header from 'components/Header/Header';
import Table from 'components/Table/Table';

const JogoDaMemoria = () => {
  return (
    <JogoDaMemoriaProvider>
      <div className={styles.container}>
        <Header title="Jogo da Memória" />

        <Table />

        <aside className={styles.aside}>
          <h1>Pontos: </h1>
          <h1>Tempo: </h1>
          <h1>Número de Jogadas: </h1>
          <h1>Erros: </h1>

          <div>
            <button>Pausar</button>
            <button>Resetar</button>
          </div>
        </aside>
      </div>
    </JogoDaMemoriaProvider>
  );
};

export default JogoDaMemoria;
