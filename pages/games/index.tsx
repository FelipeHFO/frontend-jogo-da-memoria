import Link from 'next/link';
import styles from './index.module.css';
import LinkGame from 'components/LinkGame/LinkGame';
import Header from 'components/Header/Header';

const Games = () => {
  return (
    <div className={styles.container}>
      <Header title="Games" />
      <div className={styles.linkGamesContainer}>
        <LinkGame link="/games/jogo-da-memoria" title="Jogo da Memória" />
        <LinkGame link="" title="Jogo da ..." />
        <LinkGame link="" title="Jogo da ..." />
        <LinkGame link="" title="Jogo da ..." />
      </div>
    </div>
  );
};

export default Games;
