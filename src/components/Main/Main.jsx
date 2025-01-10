import styles from './main.module.scss';
import LimitAge from './LimitAge/LimitAge';
import Intro from './Intro/Intro';
import BannerGame from './BannerGame/BannerGame';

function Main() {
  return (
    <main className={styles.main}>
      <LimitAge />
      <Intro />
      <BannerGame />
    </main>
  )
}

export default Main;