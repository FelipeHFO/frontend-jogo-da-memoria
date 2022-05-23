import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CustomInput from 'components/CustomInput/CustomInput';

const FormRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertPassword, setAlertPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const router = useRouter();

  function createAccount(e) {
    e.preventDefault();

    if (email === '' || password === '' || confirmPassword === '') {
      return alert('Digite os campos necessário!');
    }

    if (password !== confirmPassword) {
      setAlertPassword(true);
      return;
    }

    return router.push('dashboard');
  }

  return (
    <form
      onSubmit={createAccount}
      className="flex flex-col justify-center items-center w-96 h-auto bg-gradient-to-t from-cyan-400 to-blue-700 rounded-2xl py-20"
    >
      <input
        type="email"
        placeholder="Digite seu email"
        className="w-3/4 h-14 m-5 pl-2 outline-none"
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
        className="w-3/4 h-10 text-lg font-bold text-white bg-green-600 hover:bg-green-400 transition-all duration-300 m-5"
      >
        Entrar
      </button>
    </form>
  );
};

export default FormRegister;
