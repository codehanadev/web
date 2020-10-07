import styles from './index.module.scss';


export default function Comments() {
    return <>
        <div className={styles.background}>
            <h1 className={styles.header}>Reviews</h1>
        </div>
        <div className={styles.Details}>
            <div className={styles.details}>
                <h2>Hear what others have said</h2>                
                <p>"This course has helped me get a better understanding of web development!" - Billy Bob</p>
                <p>"I discovered that, even though I have no experience programming, I CAN do software engineering!" - Sally Smith</p>
                <p>"I discovered my inner geek and am on my road to fame." - Mel</p>
            </div>
        </div>
    </>;
}