import styles from './content.module.scss';
import imgAge from '../../images/age.jpg';

function ContentBlog() {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, maxime.</h2>
      <div className={styles.container}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quo, quam ullam natus nam ea ut laboriosam dolorum recusandae doloribus rem! Adipisci doloribus error voluptatibus quos nulla deserunt a aperiam, ad iste minus, autem, velit in nobis minima nesciunt distinctio.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, asperiores vitae sunt ut sint repellat aliquid. Natus quasi eius unde?</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque temporibus magnam ducimus sit odio voluptatem fuga ab obcaecati sequi animi.</p>
      </div>
      <img className={styles.image} src={imgAge} alt="age" />
    </section>
  )
}

export default ContentBlog;