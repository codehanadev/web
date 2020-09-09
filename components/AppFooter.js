import styles from '../styles/AppFooter.module.scss';


export default function AppFooter(props) {
  return <footer className={styles.footer}>
    <div className={styles.content}>
      <a href="mailto:contact@codehana.dev" target="_blank">Contact Us</a>
      <span>© 2020 CodeHana</span>
    </div>
  </footer>;
}
