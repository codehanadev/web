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
    '4 - week program, 9 hours of weekly in-person instruction, 6 hours of weekly take-home work (60 hours total)',
    'Class size: maximum of 20 students.All state covid-19 guidelines will be followed',
    'Requirements: own laptop (model within the last 4 years), reliable internet',
    'Tuition: TBD',
    'Location: TBD',
    'Time: TBD',
];



export default function Course() {
    return <>
        {/* <div className={styles.banner}>
            <img src="/mern.png" />
        </div> */}
        <h1 className={styles.header}>{'FullStack Development\nFoundations'}</h1>
        <div className={styles.Description}>
            <div className={styles.description}>
                <section>
                    <p>Web Development Foundations is an introduction to the world of software development.It is an intensive 4 - week curriculum for people who want to learn how to build a website from the ground up.No coding experience required.The only requirement is commitment.</p>
                    <p>The three pillars of front-end web development are HTML, CSS, and JavaScript. Each subject will be covered with a direct and applicable approach that can be taken into the real world. While the course work may appear intimidating, be assured support will be provided every step of the way to ensure success.</p>
                    <p>These fundamental skills are the building blocks to launch a career in software development. The tech industry is growing at an incredible pace, offering unlimited opportunities to build a wealthy and sustainable career.</p>
                </section>
                <section>
                    <h3>Program Details</h3>
                    <ul className={styles.program}>{program.map((detail, i) => <li key={i}>{detail}</li>)}</ul>
                </section>
            </div>
        </div>
        <div className={styles.Progress}>
            <div className={styles.left}>
                <Session {...sessions[1]} />
                <Session {...sessions[3]} style={{ marginTop: '18px' }} />
                <Session {...sessions[5]} style={{ marginTop: '18px' }} />
                <Session {...sessions[7]} style={{ marginTop: '18px' }} />
                <Session {...sessions[9]} />
                <Session {...sessions[11]} />
            </div>
            <div className={styles.track}/>
            <div className={styles.right}>
                <Session {...sessions[0]} />
                <Session {...sessions[1]} />
                <Session {...sessions[2]} />
                <Session {...sessions[3]} />
                <Session {...sessions[4]} />
                <Session {...sessions[5]} />
                <Session {...sessions[6]} />
                <Session {...sessions[7]} />
                <Session {...sessions[8]} />
                <Session {...sessions[9]} />
                <Session {...sessions[10]} />
                <Session {...sessions[11]} />
            </div>
        </div>
    </>;
}
