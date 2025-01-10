import styles from './banner.module.scss';
import { Link } from 'react-router-dom';

function BannerGame() {

  return (
    <section className={styles.banner}>
      <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque pariatur autem iure magni, odio ipsum possimus molestiae accusamus soluta repudiandae?</p>
      <Link className={styles.link} to='#'>Start Game</Link>
    </section>
  )
}

export default BannerGame;