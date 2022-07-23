import FormRegister from 'components/FormRegister/FormRegister';
import styles from '../styles/index.module.css';
import Header from 'components/Header/Header';
import Head from 'next/head';

const Register = () => (
  <div className={styles.container}>
    <Head>
      <title>Crie sua conta - Projeto Jogo da Memória</title>
      <meta name="description" content="Projeto Jogo da Memória" />
    </Head>
    <Header text="Jogo da Memória" page="register" />
    <FormRegister />
  </div>
);

export default Register;
