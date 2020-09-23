import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import AppBarUI from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import { LogoIcon, LogoName } from '../Logo';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const SideNav = props => {
  const classes = useStyles();
  const [open, toggleDrawer] = useState(false);
  
  return <>
    <div className={styles.drawer}>
      <div className={styles.logo} onClick={() => toggleDrawer(!open)}>
        <LogoIcon className={styles.icon} />
        <LogoName className={styles.name} />
      </div>
    </div>
    <Drawer
      open={open}
      onClose={() => toggleDrawer(false)}>
      <div
        className={cx(styles.list, classes.list)}
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}>
        <List>
          {props.links.map((link, i) => (
            <ListItem button key={i}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  </>;
};

const TopNav = props => {
  return <div className={styles.links}>
    <Link className={styles.logo} href="/">
      <LogoIcon className={styles.icon} />
      <LogoName className={styles.name} />
    </Link>
    {props.links.map((link, i) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
  </div>;
};


export default function AppBar(props) {
  const barRef = useRef();
  const [mobile, setMobile] = useState(true);
  const checkBounds = () => {
    const width = barRef.current?.getBoundingClientRect?.()?.width;
    if (width < 600) return setMobile(true);
    if (width >= 600) return setMobile(false);
  };
  useEffect(() => {
    checkBounds();
    window.addEventListener('resize', checkBounds);
    return () => window.removeEventListener('resize', checkBounds);
  }, []);


  return <AppBarUI position="static" color="inherit">
    <div className={styles.appbar} ref={barRef}>
      <Toolbar disableGutters={true} variant="dense">
        {mobile ? <SideNav links={props.links} /> : <TopNav links={props.links} />}
      </Toolbar>
    </div>
  </AppBarUI>;
}
