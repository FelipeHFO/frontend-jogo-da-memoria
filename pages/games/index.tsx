import Link from 'next/link';
import styles from './index.module.css';

const Games = () => {
  return (
    <div className="w-full min-h-screen max-h-full bg-light-blue">
      <h1 className={styles.title}>Games</h1>
      <div className="flex justify-around items-center flex-wrap w-full p-20">
        <Link href="/games/jogo-da-memoria">
          <div className="flex justify-center items-center w-96 h-96 bg-dark-blue rounded-2xl m-5 shadow-xl">
            <h1 className="text-3xl text-center">Jogo da Memória</h1>
          </div>
        </Link>
        <Link href="/">
          <div className="flex justify-center items-center w-96 h-96 bg-dark-blue rounded-2xl m-5 shadow-xl">
            <h1 className="text-3xl text-center">Jogo da ...?</h1>
          </div>
        </Link>
        <Link href="/">
          <div className="flex justify-center items-center w-96 h-96 bg-dark-blue rounded-2xl m-5 shadow-xl">
            <h1 className="text-3xl text-center">Jogo da ...?</h1>
          </div>
        </Link>
        <Link href="/">
          <div className="flex justify-center items-center w-96 h-96 bg-dark-blue rounded-2xl m-5 shadow-xl">
            <h1 className="text-3xl text-center">Jogo da ...?</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Games;
