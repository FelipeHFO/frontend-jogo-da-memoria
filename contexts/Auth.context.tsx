import useRequest from 'hooks/useRequest';
import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const { sendPost } = useRequest();

  async function signIn(email: string, password: string): Promise<string> {
    try {
      const credentials = {
        email,
        password,
      };
      const response = await sendPost('auth/login', credentials);
      const data = await response.json();

      if (data?.token) {
        await localStorage.setItem('@SCDAuth:token', data.token);
        setToken(data.token);
        return data.token;
      }

      return 'Usuário inválido';
    } catch (e) {
      return 'Erro';
    }
  }

  return (
    <AuthContext.Provider value={{ token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
