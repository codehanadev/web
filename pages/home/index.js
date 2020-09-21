import styles from './index.module.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MediaCopySection from '../../components/MediaCopySection';

export default function Home() {
  return <>
    <section className={styles.hero}>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>Ride with Code<em>Hana</em></h2>
          <p>Committed to bringing the craft of coding to Hawaii’s people and economy. </p>
        </div>
      </div>
    </section>
    <MediaCopySection
      button={{
        label: 'See the vision',
        href: '/vision',
      }}
      description="Software engineering has established itself as an integral part of every industry in our world today. It has proven itself to be pandemic- and recession-proof, and its future is bright. Over the last decade, software bootcamps have popped up all over the Mainland. These bootcamps are 3- to 4-month immersive programs designed to produce job-ready graduates to supply the ever-growing demand for software engineers at companies like Google, Facebook, Amazon, and many others. The only requirements for success are education, equipment, an internet connection, and ambition."
      media={<img src="/mobileapp.png" style={{ width: '100%'}}/>}
      style={{ background: '#fafafa' }}
      title="Software Engineering is in Demand"
    />
    <MediaCopySection
      button={{
        label: 'Learn More',
        href: '/course',
      }}
      right={true}
      description="Web Development Foundations is an introduction to the world of software development. It is an intensive 4-week curriculum for people who want to learn how to build a website from the ground up. No coding experience required. The only requirement is commitment."
      media={<img src="/mern.png" style={{ width: '80%' }}/>}
      style={{ background: '#f5f5f5' }}
      title="Course Info"
    />
    <section className={styles.aboutus}>
      <div className={styles.content}>
        <div>
          <h2>About Us</h2>
          <p>Experienced coders and software engineers, Ed and Eric have more than 30 years of combined experience in the tech sector and have worked for successful companies.</p>
          <p>
            <Button
            className={styles.button}
            color="primary"
            disableElevation={true}
            href="/aboutus"
            size="large"
            variant="outlined">Get to know us more</Button>
          </p>
        </div>
      </div>
    </section>
  </>;
}
