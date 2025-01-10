import styles from './intro.module.scss';
import mermaid from '../../../images/mermaid.png';

function Intro() {
  return (
    <section className={styles.intro}>
      <img className={styles.picture} src={mermaid} alt="mermaid" />

      <div className={styles.container}>
        <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolore sequi accusamus animi, autem omnis voluptate, amet deleniti, fugiat voluptas aspernatur iusto asperiores.</p>
      </div>

    </section>
  )
}

export default Intro;