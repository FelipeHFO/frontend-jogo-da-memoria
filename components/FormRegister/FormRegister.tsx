import { useState } from 'react';
import { useRouter } from 'next/router';
import useRequest from 'hooks/useRequest';
import CustomInput from 'components/CustomInput/CustomInput';
import styles from './FormRegister.module.css';

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
    <form onSubmit={createAccount} className={styles.form}>
      <h1 className={styles.formTitle}>Cadastro</h1>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          autoComplete="new-password"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Digite seu email"
          autoComplete="new-password"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

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

      <button type="submit" className={styles.button}>
        Cadastrar
      </button>
    </form>
  );
};

export default FormRegister;
