import useRequest from 'hooks/useRequest';
import { useState } from 'react';

const FormRecoverPassword = () => {
  const [email, setEmail] = useState('');
  const { sendPost } = useRequest();

  const sendEmail = (e) => {
    e.preventDefault();
    // const response = sendPost();

    const response = { msg: 'Enviado!' };

    if (response.msg.includes('Enviado')) {
      alert('Email enviado com sucesso!');
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col justify-center items-center w-96 h-96 bg-gradient-to-t from-cyan-400 to-blue-700 rounded-2xl"
    >
      <h1 className="text-2xl text-white font-bold p-2">Recuperar senha</h1>
      <input
        type="text"
        placeholder="Digite o email cadastrado"
        className="w-3/4 h-10 bg-transparent text-white border-b m-5 pl-2 outline-none placeholder:text-white"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <button
        type="submit"
        className="w-3/4 h-10 text-lg font-bold text-white bg-blue-700 m-5 hover:bg-blue-900 transition-all duration-300"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormRecoverPassword;
