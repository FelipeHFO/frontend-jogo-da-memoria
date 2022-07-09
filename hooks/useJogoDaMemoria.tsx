import { useContext } from 'react';
import { JogoDaMemoriaContext } from 'contexts/JogoDaMemoriaContext';

export function useJogoDaMemoria() {
  const context = useContext(JogoDaMemoriaContext);
  return context;
}