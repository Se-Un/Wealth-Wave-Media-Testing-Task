import styles from './limit.module.scss';
import ageImg from '../../../images/age.jpg';

function LimitAge() {
  return (
    <section className={styles.age}>
      <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptate.</h2>
      <img className={styles.picture} src={ageImg} alt="age" />
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis beatae nesciunt provident! Dignissimos eligendi, tempora consequuntur dolores sit provident explicabo sapiente qui dolorum in doloremque itaque voluptatum eos cumque tenetur aliquam, suscipit accusantium ipsum quasi, delectus fugit mollitia architecto illum. Animi voluptatibus, veniam quam ullam sequi a iste! Enim, quos!
        <span className={styles.span}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores tenetur quia repellendus, incidunt illum doloribus corporis consectetur aliquam doloremque rerum modi quidem, fugiat cumque porro quaerat hic quasi similique molestias.
        </span>
      </p>
    </section>
  )
}

export default LimitAge;