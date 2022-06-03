import useRequest from 'hooks/useRequest';
import { createContext, useState } from 'react';

type SignInResponseType = {
  message?: string;
  token?: string;
  erro?: string;
};

type AuthContextType = {
  token: string;
  signIn: (email: string, password: string) => Promise<SignInResponseType>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const { sendPost } = useRequest();

  async function signIn(
    email: string,
    password: string,
  ): Promise<SignInResponseType> {
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
        return data;
      }

      return { message: 'Usuário não encontrado!' };
    } catch (e) {
      return { erro: 'Erro' };
    }
  }

  return (
    <AuthContext.Provider value={{ token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
