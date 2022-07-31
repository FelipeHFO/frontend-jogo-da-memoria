import { AuthProvider } from 'contexts/Auth.context';
import { JogoDaMemoriaProvider } from 'contexts/JogoDaMemoriaContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <JogoDaMemoriaProvider>
        <Component {...pageProps} />
      </JogoDaMemoriaProvider>
    </AuthProvider>
  );
}

export default MyApp;
