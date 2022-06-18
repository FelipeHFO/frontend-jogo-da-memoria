import FormRegister from 'components/FormRegister/FormRegister';
import Head from 'next/head';
import styles from '../styles/index.module.css';

const Register = () => (
  <div className={styles.container}>
    <Head>
      <title>Crie sua conta - Projeto Jogo da Memória</title>
      <meta name="description" content="Projeto Jogo da Memória" />
    </Head>
    <h1 className={styles.titleForm}>Jogo da Memória</h1>
    <FormRegister />
  </div>
);

export default Register;
