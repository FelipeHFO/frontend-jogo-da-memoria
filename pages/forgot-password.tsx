import FormRecoverPassword from 'components/FormRecoverPassword/FormRecoverPassword';
import Head from 'next/head';
import styles from '../styles/pages.module.css';

export default function ForgotPassword() {
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen ${styles.bg}`}
    >
      <Head>
        <title>Projeto Jogo da Memória</title>
        <meta name="description" content="Projeto Jogo da Memória" />
      </Head>
      <h1 className={styles.titleForm}>Jogo da Memória</h1>
      <FormRecoverPassword />
    </div>
  );
}
