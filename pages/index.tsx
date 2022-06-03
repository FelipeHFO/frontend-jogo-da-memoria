import Head from 'next/head';
import FormLogin from '../components/FormLogin/FormLogin';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Projeto Jogo da Memória</title>
        <meta name="description" content="Projeto Jogo da Memória" />
      </Head>
      <FormLogin />
    </div>
  );
}
