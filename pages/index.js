import styles from '../styles/Home.module.scss';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return <>
    <section className={styles.hero}>
      <div className={styles.content}>
        <div>
          <h1>Ride with Code<em>Hana</em></h1>
          <p>Committed to bringing the craft of coding to Hawaii’s people and economy. </p>
        </div>
      </div>
    </section>
  </>;
}
