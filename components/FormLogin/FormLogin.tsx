import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import styles from './FormLogin.module.css';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signIn } = useAuth();

  async function login(event) {
    event.preventDefault();

    if (!email || !password) {
      return alert('Preencha todos os campos!');
    }

    setIsLoading(true);

    const response = await signIn(email, password);

    if (response?.message === 'Usuário não encontrado!') {
      setIsLoading(false);
      return alert(response.message);
    } else if (response?.erro) {
      setIsLoading(false);
      return alert(response.erro);
    }

    router.push('games');
  }

  return (
    <form onSubmit={login} className={styles.form}>
      <h1 className={styles.formTitle}>Login</h1>
      <input
        type="email"
        placeholder="Digite seu email"
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      {isLoading ? (
        <button type="submit" className={styles.button}>
          <div className={styles.spin} />
          Carregando...
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          Entrar
        </button>
      )}

      <Link href={'/forgot-password'} passHref>
        <a href="" className={styles.link}>
          Esqueceu sua senha?
        </a>
      </Link>

      <Link href={'/register'} passHref>
        <a href="" className={styles.link}>
          Crie sua conta!
        </a>
      </Link>
    </form>
  );
};

export default FormLogin;
