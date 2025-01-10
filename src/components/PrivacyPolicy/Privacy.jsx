import styles from './privacy.module.scss';
import ContentBlog from '../ContentBlog/ContentBlog';
import Policy from './Policy/Policy';


export default function Privacy() {
  return (
    <main className={styles.privacy}>
      <Policy />
      <ContentBlog />
    </main>
  )
}