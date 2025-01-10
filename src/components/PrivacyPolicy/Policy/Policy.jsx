import styles from './policy.module.scss';
import { dataPolicy } from '../../../constants/constants';

export default function Policy() {

  return (
    <section className={styles.policy}>
      <h2 className={styles.title}>Priva Policy</h2>

      <div className={styles.container}>
       {
        dataPolicy.map((item) => {
          return (
            <div className={styles.content} key={item.title}>
              <h3 className={styles.titleContent}>{item.title}</h3>
              <h4 className={styles.subtitle}>{item.subtitle}</h4>
              <p className={styles.text}>{item.text}</p>
            </div>
          )
        })
       }
      </div>

    </section>
  )
}