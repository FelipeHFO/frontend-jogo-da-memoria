import styles from '../styles/index.module.css';
import { useJogoDaMemoria } from 'hooks/useJogoDaMemoria';
import Table from 'components/Table/Table';
import Stopwatch from 'components/Stopwatch/Stopwatch';
import Scores from 'components/Scores/Scores';
import Head from 'next/head';
import Header from 'components/Header/Header';

export default function Home() {
  const { isEndGame } = useJogoDaMemoria();

  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Jogo da Memória</title>
        <meta name="description" content="Projeto Jogo da Memória" />
      </Head>

      <Header text="Jogo da Memória" page="jogo-da-memoria" />

      <div className={styles.gameContainer}>
        <Table />
        <Stopwatch />
        {isEndGame ? <Scores /> : null}
      </div>
    </div>
  );
}
