import { useState } from 'react';
import { useRouter } from 'next/router';
import useRequest from 'hooks/useRequest';
import CustomInput from 'components/CustomInput/CustomInput';

const FormRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertPassword, setAlertPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const { sendPost } = useRequest();
  const router = useRouter();

  async function createAccount(e) {
    e.preventDefault();

    if (
      username === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      return alert('Digite os campos necessário!');
    }

    if (password !== confirmPassword) {
      setAlertPassword(true);
      return;
    }

    const response = await sendPost('register', {
      username: username,
      email: email,
      password: password,
    });
    const data = await response.json();

    if (data?.token) {
      return router.push('games');
    }

    return alert('Ocorreu algum erro!');
  }

  return (
    <form
      onSubmit={createAccount}
      className="flex flex-col justify-center items-center w-96 h-auto bg-gradient-to-t from-cyan-400 to-blue-700 rounded-2xl py-10"
    >
      <h1 className="text-2xl text-white font-bold p-2">Cadastro</h1>
      <input
        type="text"
        placeholder="Digite seu nome de usuário"
        autoComplete="new-password"
        className="w-3/4 h-10 bg-transparent text-white border-b m-5 pl-2 outline-none placeholder:text-white"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <input
        type="email"
        placeholder="Digite seu email"
        autoComplete="new-password"
        className="w-3/4 h-10 bg-transparent text-white border-b m-5 pl-2 outline-none placeholder:text-white"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <CustomInput
        type="password"
        placeholder="Informe sua senha"
        value={password}
        setValue={setPassword}
        visible={visiblePassword}
        setVisible={setVisiblePassword}
      />

      <CustomInput
        type="password"
        placeholder="Confirme sua senha"
        value={confirmPassword}
        setValue={setConfirmPassword}
        alertPassword={alertPassword}
        visible={visibleConfirmPassword}
        setVisible={setVisibleConfirmPassword}
      />

      <button
        type="submit"
        className="w-3/4 h-10 text-lg font-bold text-white bg-blue-700 m-5 hover:bg-blue-900 transition-all duration-300"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default FormRegister;
