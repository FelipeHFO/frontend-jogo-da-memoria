import Head from 'next/head';
import FormLogin from '../components/FormLogin/FormLogin';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Jogo da Memória</title>
        <meta name="description" content="Projeto Jogo da Memória" />
      </Head>
      <h1 className={styles.titleForm}>Jogo da Memória</h1>
      <FormLogin />
    </div>
  );
}
