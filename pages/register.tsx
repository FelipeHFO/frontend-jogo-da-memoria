import FormRegister from 'components/FormRegister/FormRegister';
import Head from 'next/head';
import styles from '../styles/pages.module.css';

const Register = () => (
  <div
    className={`flex flex-col justify-center items-center h-screen ${styles.bg}`}
  >
    <Head>
      <title>Crie sua conta - Projeto Jogo da Memória</title>
      <meta name="description" content="Projeto Jogo da Memória" />
    </Head>
    <h1 className={styles.titleForm}>Jogo da Memória</h1>
    <FormRegister />
  </div>
);

export default Register;
