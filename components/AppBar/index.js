import styles from './styles.module.scss';
import AppBarUI from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';


export default function AppBar(props) {
  return <AppBarUI position="static" color="inherit">
    <div className={styles.appbar}>
      <Toolbar disableGutters={true} variant="dense">
        <div className={styles.links}>
          <Link className={styles.logo} href="/">
            <span className={styles.icon} />
            <span className={styles.text} />
          </Link>
          {props.links.map((link, i) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <Button href="mailto:contact@codehana.dev" target="_blank" color="secondary" size="small" variant="outlined">Ride On!</Button>
      </Toolbar>
    </div>
  </AppBarUI>;
}
