import styles from './Header.module.css';

const Header = ({ title }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
  </header>
);

export default Header;
