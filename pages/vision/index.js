import styles from './index.module.scss';
import Typography from '@material-ui/core/Typography';
import MediaCopySection from '../../components/MediaCopySection';


export default function Opportunities() {
    return <>
        <MediaCopySection
            description="Software engineering has established itself as an integral part of every industry in our world today. It has proven itself to be pandemic- and recession-proof, and its future is bright. Over the last decade, software bootcamps have popped up all over the Mainland. These bootcamps are 3- to 4-month immersive programs designed to produce job-ready graduates to supply the ever-growing demand for software engineers at companies like Google, Facebook, Amazon, and many others. The only requirements for success are education, equipment, an internet connection, and ambition."
            media={<img src="/mobileapp.png" style={{ width: '100%' }} />}
            style={{ background: '#fafafa' }}
            title="Software Engineering is in Demand"
        />
    </>;
}
