import { JogoDaMemoriaProvider } from 'contexts/JogoDaMemoriaContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <JogoDaMemoriaProvider>
      <Component {...pageProps} />
    </JogoDaMemoriaProvider>
  );
}

export default MyApp;
