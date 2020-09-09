import styles from '../styles/Home.module.scss';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return <>
    <section className={styles.hero}>
      <div className={styles.content}>
        <div>
          <h1>Ride with CodeHana</h1>
          <p>Be immersed in the world of software engineering. Expose, educate and train with us to see the potentials of being a programmer.</p>
          {/* <p>Whether you are writing your next bestseller or just getting into creative writing: Sweek is your free writing app.</p> */}
        </div>
      </div>
    </section>
  </>;
}
