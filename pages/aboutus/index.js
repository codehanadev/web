import cx from 'classnames';
import styles from './index.module.scss';
import Typography from '@material-ui/core/Typography';
import MediaCopySection from '../../components/MediaCopySection';



const sessions = [
    {
        title: '1. Workspace Setup',
        description: 'Getting started in the world of web development is a daunting task. On this first day, you will set up your overall work environment. This will include all the programs and tools necessary to start building your first web application.',
    },
    {
        title: '2. Introduction to Javascript',
        description: 'Javascript is the essential language of the web. We will provide a comprehensive overview of the language, its syntax and usage, while also building proficiency in declarative coding.',
    },
    {
        title: '3. Conditionals, Loops & Functions',
        description: 'On this day we go further into the javascript language. We will work through conditional programming, loops and functions. These features allow us to harness the power of computing, to handle complex operations and repetitive tasks.',
    },
    {
        title: '4. Objects',
        description: 'Objects are important concepts in the programming world. They are a structured representation of an abstraction of data. In javascript, objects can have properties, methods and other objects. You will learn how to define, design and use them.',
    },
    {
        title: '5. HTML',
        description: 'The building blocks of every single web page on the internet is HTML code. On this day, you will learn all the different HTML tags and their behaviors as well as begin to structure your very first web page.',
    },
    {
        title: '6. CSS',
        description: 'CSS is the language that describes how a web page will be displayed. You will learn to apply designs and styles to enhance the appearance of your site.',
    },
    {
        title: '7. Event Handling',
        description: 'Today’s websites are highly interactive. You will learn how to make your website come alive through handling user interactions and processing events.',
    },
    {
        title: '8. Server',
        description: 'Behind every beautiful website client, is a backend server. On this day, you will stand up your own backend web server to handle requests from clients.',
    },
    {
        title: '9. Data Exchange',
        description: 'Web applications are powerful because of the ability to both capture and return data. You will learn the many ways you can exchange data between a server and client.',
    },
    {
        title: '10. Frameworks',
        description: 'The best engineers are lazy. And we will help you become more lazy by introducing frameworks to your toolkit. Frameworks abstract out boilerplate work so that you can focus on the important parts of your application.',
    },
    {
        title: '11. Databases',
        description: 'Data is the most valuable asset on the web. That data needs to be stored somewhere. You will gain an overview of databases and how to utilize one for your own website.',
    },
    {
        title: '12. Go Live!',
        description: 'If you made it this far, you have arrived! Our final day will consist of tying together your final project and presenting it to your cohort. We will also look at tools to deploy your application to a production site for the world to see!',
    },
];


const Session = props => {
    const {
        description,
        title,
        style,
    } = props;
    return <div className={styles.Session} style={style}>
        <div className={styles.point} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>;
};

const program = [
    '4 - week program, 9 hours of weekly in -person instruction, 6 hours of weekly take - home work(60 hours total)',
    'Class size: maximum of 20 students.All state covid - 19 guidelines will be followed',
    'Requirements: own laptop(model within the last 4 years), reliable internet',
    'Tuition: $500(subject to class size)',
    'Location: TBD',
    'Time: TBD',
];



export default function Course() {
    return <>
        <h1 className={styles.header}>Who we are</h1>
        <div className={styles.faces}>
            <div className={styles.face}>
                {/* <img className={styles.face} src="/aboutus/about_ed.jpg"/> */}
                <img src="/aboutus/about_ed.jpg"/>
                <span>Ed</span>
            </div>
            <div className={styles.face}>
                {/* <img className={styles.face} src="/aboutus/about_eric.jpg"/> */}
                <img src="/aboutus/about_eric.jpg"/>
                <span>Eric</span>
            </div>
        </div>
        <div className={styles.details}>
            <p>Ed Lin and Eric Tsuei are lifelong friends and professional colleagues. Both experienced coders and software engineers, Ed and Eric have more than 30 years of combined experience in the tech sector and have worked for successful companies including Hertz, AOL, Boxed, Townsquare Media, etc.</p>
            <p>They have held various positions in development, training, hiring and management. A career in software development has allowed Lin and Tsuei the freedom to earn a living without the constraints of a typical corporate environment. Which means they have more time for things that deeply matter to them—investing in ​ohana​, friendships, and community.</p>
            <p>They desire to bring those opportunities to Kauai, and in doing so, to see Kauai's people and economy flourish through the development of coding as a craft at Code​Hana​.</p>
            <p>Ed is married to Liz and they have four children. Eric is married to Nina, and they have three children. When not at work, Ed and Eric both actively serve in their local church, as a pastor and community group leader, respectively.</p>
        </div>
    </>;
}
