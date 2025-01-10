import styles from './blog.module.scss';
import { blogItems } from '../../../constants/constants';

function Blog() {
  return (
    <section className={styles.blog}>
      <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel quasi dolor!</h2>
      <div className={styles.container}>
        {
          blogItems.map((item) => {
            return (
              <div key={item.title} className={styles.card}>
                <h3 className={styles.titleCard}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Blog;