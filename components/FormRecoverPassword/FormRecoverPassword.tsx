import useRequest from 'hooks/useRequest';
import { useState } from 'react';
import styles from './FormRecoverPassword.module.css';

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
    <form onSubmit={sendEmail} className={styles.form}>
      <h1 className={styles.formTitle}>Recuperar senha</h1>
      <input
        type="text"
        placeholder="Digite o email cadastrado"
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
};

export default FormRecoverPassword;
