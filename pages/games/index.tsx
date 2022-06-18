import Link from 'next/link';
import styles from './index.module.css';
import LinkGame from 'components/LinkGame/LinkGame';

const Games = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Games</h1>
      <div className="flex justify-around items-center flex-wrap w-full p-20">
        <LinkGame link="/games/jogo-da-memoria" title="Jogo da Memória" />
        <LinkGame link="" title="Jogo da ..." />
        <LinkGame link="" title="Jogo da ..." />
        <LinkGame link="" title="Jogo da ..." />
      </div>
    </div>
  );
};

export default Games;
