import useRequest from 'hooks/useRequest';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

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
  const [token, setToken] = useState('');
  const router = useRouter();
  const { sendPost } = useRequest();

  useEffect(() => {
    async function loadStoragedData() {
      const storagedToken = await localStorage.getItem('@SCDAuth:token');

      if (storagedToken) {
        setToken(storagedToken);
      } else {
        //router.push('/');
      }
    }

    loadStoragedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      return { erro: 'Erro no servidor!' };
    }
  }

  return (
    <AuthContext.Provider value={{ token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
