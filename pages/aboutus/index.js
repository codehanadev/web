import styles from './index.module.scss';


export default function AboutUs() {
    return <>
        <div className={styles.background}>
            <h1 className={styles.header}>Who we are</h1>
            <div className={styles.faces}>
                <div className={styles.face}>
                    <img src="/aboutus/ACpic.jpg" />
                    <span>Ed</span>
                </div>
                <div className={styles.face}>
                    <img src="/aboutus/NHpic.jpg" />
                    <span>Eric</span>
                </div>
            </div>
        </div>
        <div className={styles.Details}>
            <div className={styles.details}>
                <p>Ed Lin and Eric Tsuei are lifelong friends and professional colleagues. Both experienced coders and software engineers, Ed and Eric have more than 30 years of combined experience in the tech sector and have worked for successful companies including Hertz, AOL, Boxed, Townsquare Media, etc.</p>
                <p>They have held various positions in development, training, hiring and management. A career in software development has allowed Lin and Tsuei the freedom to earn a living without the constraints of a typical corporate environment. Which means they have more time for things that deeply matter to them—investing in ​ohana​, friendships, and community.</p>
                <p>They desire to bring those opportunities to Kauai, and in doing so, to see Kauai's people and economy flourish through the development of coding as a craft at Code​Hana​.</p>
                <p>Ed is married to Liz and they have four children. Eric is married to Nina, and they have three children. When not at work, Ed and Eric both actively serve in their local church, as a pastor and community group leader, respectively.</p>
            </div>
        </div>
    </>;
}
