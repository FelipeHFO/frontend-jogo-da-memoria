import styles from './Header.module.css';

export interface HeaderPropsInterface {
  text: string;
  page?: string;
}

const Header = ({ text, page }: HeaderPropsInterface) => {
  function checkClasses() {
    if (page === 'home' || page === 'forgot-password' || page === 'register')
      return [styles.title, styles.titleLg].join(' ');
    if (page === 'games' || page === 'jogo-da-memoria')
      return [styles.title, styles.titleMd].join(' ');

    return styles.title;
  }

  return (
    <header className={styles.header}>
      <h1 className={checkClasses()}>{text}</h1>
    </header>
  );
};

export default Header;
