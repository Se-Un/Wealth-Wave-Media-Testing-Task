import styles from './main.module.scss';
import LimitAge from './LimitAge/LimitAge';
import Intro from './Intro/Intro';
import BannerGame from './BannerGame/BannerGame';
import Blog from './Blog/Blog';
import ContentBlog from '../ContentBlog/ContentBlog';

function Main() {
  return (
    <main className={styles.main}>
      <LimitAge />
      <Intro />
      <BannerGame />
      <Blog />
      <ContentBlog />
    </main>
  )
}

export default Main;