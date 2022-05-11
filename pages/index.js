import Head from 'next/head';
import FormLogin from '../components/FormLogin/FormLogin';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Projeto Auditor</title>
        <meta name="description" content="Projeto Auditor" />
      </Head>
      <FormLogin />
    </div>
  );
}
