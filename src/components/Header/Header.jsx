import styles from './header.module.scss';
import logotype from '../../images/logo.jpg';
import imgAge from '../../images/age.jpg';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className={styles.header}>
      <img className={styles.logotype} src={logotype} alt="logotype" />
      <nav className={styles.navigation}>
        <Link className={styles.link} to='/'>Home</Link>
        <Link className={styles.link} to='/policy'>Policy Privacy</Link>
      </nav>
      <img className={styles.picture} src={imgAge} alt='age' />
    </header>
  );
}

export default Header;