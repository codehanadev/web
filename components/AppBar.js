import styles from '../styles/AppBar.module.scss';
import AppBarUI from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';


export default function AppBar(props) {
  return <AppBarUI position="static">
    <div className={styles.appbar}>
      <Toolbar disableGutters={true}>
        <div className={styles.links}>
          {props.links.map((link, i) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <Button href="mailto:contact@codehana.dev" target="_blank" color="secondary" size="small" variant="contained">Ride On!</Button>
      </Toolbar>
    </div>
  </AppBarUI>;
}
