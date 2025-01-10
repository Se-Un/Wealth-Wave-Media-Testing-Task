import styles from './footer.module.scss';
import logotype from '../../images/logo.jpg';
import imgAge from '../../images/age.jpg';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={logotype} alt="logo" />
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to='/'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to='#'>Privacy Policy</Link>
          </li>
        </ul>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolorum omnis, voluptatem a inventore eos repudiandae quos. Iste officia doloremque voluptatibus enim ea, debitis necessitatibus quam quasi, architecto dolorem, nisi a rerum obcaecati suscipit earum officiis tenetur culpa! A recusandae nulla illum vitae eos totam sed reiciendis officiis aut non quidem rem nihil delectus architecto, magnam consectetur at aperiam dignissimos quae quas voluptatem iure. Obcaecati, maxime sed! Ullam obcaecati asperiores voluptatem aliquid impedit! Molestias velit vero nemo eius nihil. Ipsa aspernatur voluptas possimus, adipisci tenetur nobis nemo repudiandae, praesentium ipsam atque labore ea, voluptate minus debitis ab odit exercitationem excepturi.
        </p>
      </div>
      <img className={styles.ageImg} src={imgAge} alt="age" />
    </footer>
  )
}

export default Footer;