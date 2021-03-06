
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
                <p>"Coding is the Life for me." - Melo</p>
                <p>"Iʻm not the sharpest on computers, but Ed and Eric have made learning how to code a simple step by step process." - Brent O</p>
                <p>"I'm excited to learn more about software engineering!" - Shiloh McCormick</p>
                <p>"Codehana is an incredible way to learn how to use code!" - Nathan Grosse</p>
                <p>"Iʻm excited to learn the craft of coding!" - Brent O</p>
                <p>"Ed and Eric do an amazing job explaining how to use the tools necessary to learn to code! I highly recoomend!" - Nathan G.</p>
                <p>"More comments headed your way!" - Shiloh McCormick</p>
                <p>"Getting better at creating and merging my branches with each comment!" - Shiloh McCormick</p>
                <p>"Keep practicing to get better!" - Shiloh McCormick</p>
                <p>"One Last time!" - Shiloh McCormick</p>
                <p>"I never thought I would be able to program, but Codehana is making it easy and fun!" - Logan</p> 
            </div>
        </div>
    </>;
}