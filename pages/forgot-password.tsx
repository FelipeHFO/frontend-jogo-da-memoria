import FormRecoverPassword from 'components/FormRecoverPassword/FormRecoverPassword';
import styles from '../styles/index.module.css';
import Header from 'components/Header/Header';
import Head from 'next/head';

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Jogo da Memória</title>
        <meta name="description" content="Projeto Jogo da Memória" />
      </Head>
      <Header text="Jogo da Memória" page="forgot-password" />
      <FormRecoverPassword />
    </div>
  );
}
