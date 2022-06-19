import Link from 'next/link';
import styles from './LinkGame.module.css';

type LinkGameProps = {
  link: string;
  title: string;
};

const LinkGame = ({ link, title }: LinkGameProps) => {
  return (
    <Link href={link}>
      <div className={styles.link}>
        <h1 className={styles.gameTitle}>{title}</h1>
      </div>
    </Link>
  );
};

export default LinkGame;
