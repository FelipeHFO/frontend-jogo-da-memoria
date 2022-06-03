import FormRegister from 'components/FormRegister/FormRegister';
import Head from 'next/head';

const Register = () => (
  <div className="flex justify-center items-center h-screen">
    <Head>
      <title>Crie sua conta - Projeto Jogo da Memória</title>
      <meta name="description" content="Projeto Jogo da Memória" />
    </Head>
    <FormRegister />
  </div>
);

export default Register;
