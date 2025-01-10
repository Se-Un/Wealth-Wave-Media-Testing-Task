import styles from './header.module.scss';
import logotype from '../../images/logo.jpg';
import imgAge from '../../images/age.jpg';
import { Link } from 'react-router-dom';
import { layoutLinks } from '../../constants/constants';

function Header() {

  return (
    <header className={styles.header}>
      <img className={styles.logotype} src={logotype} alt="logotype" />
      <nav className={styles.navigation}>
       {
        layoutLinks.map((item) =>  <Link className={styles.link} to={item.link} key={item.text}>{item.text}</Link>)
       }
      </nav>
      <img className={styles.picture} src={imgAge} alt='age' />
    </header>
  );
}

export default Header;