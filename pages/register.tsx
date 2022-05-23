import FormRegister from 'components/FormRegister/FormRegister';
import Head from 'next/head';

const Register = () => (
  <div className="flex justify-center items-center h-screen">
    <Head>
      <title>Crie sua conta - Projeto Auditor</title>
      <meta name="description" content="Projeto Auditor" />
    </Head>
    <FormRegister />
  </div>
);

export default Register;
