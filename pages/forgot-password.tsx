import FormRecoverPassword from 'components/FormRecoverPassword/FormRecoverPassword';
import Head from 'next/head';

export default function ForgotPassword() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Projeto Jogo da Memória</title>
        <meta name="description" content="Projeto Jogo da Memória" />
      </Head>
      <FormRecoverPassword />
    </div>
  );
}
