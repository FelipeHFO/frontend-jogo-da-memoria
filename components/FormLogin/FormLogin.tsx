import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function login(e) {
    e.preventDefault();

    if (email === '' || password === '') {
      return alert('Digite os campos necessário!');
    }

    return router.push('dashboard');
  }

  return (
    <form
      onSubmit={login}
      className="flex flex-col justify-center items-center w-96 h-96 bg-gradient-to-t from-cyan-400 to-blue-700 rounded-2xl"
    >
      <input
        type="email"
        placeholder="Digite seu email"
        className="w-3/4 h-10 m-5 pl-2 outline-none"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        className="w-3/4 h-10 m-5 pl-2 outline-none"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button
        type="submit"
        className="w-3/4 h-10 text-lg font-bold text-white bg-green-600 hover:bg-green-400 transition-all duration-300 m-10 "
      >
        Entrar
      </button>

      <Link href={'/forgot-password'} passHref>
        <a href="" className="text-white underline mb-5">
          Esqueceu sua senha?
        </a>
      </Link>

      <Link href={'/register'} passHref>
        <a href="" className="text-white underline mb-5">
          Crie sua conta!
        </a>
      </Link>
    </form>
  );
};

export default FormLogin;
