import cx from 'classnames';
import styles from './styles.module.scss';
import Button from '@material-ui/core/Button';


export default function MediaCopySection(props) {
  const {
    button,
    description,
    media,
    right = false,
    style,
    title,
  } = props;

  const alignStyles = {
    [styles.left]: !right,
    [styles.right]: right,
  };
  
  return <section className={styles.MediaCopySection} style={style}>
    <div className={cx(styles.container, alignStyles)}>
      <div className={styles.content}>
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {button && <div className={styles.button}>
          <Button
            color="primary"
            disableElevation={true}
            href={button.href}
            size="large"
            variant="contained">
              {button.label}
            </Button>
        </div>}
      </div>
      <div className={cx(styles.media, alignStyles)}>{media}</div>
    </div>
  </section>
}
