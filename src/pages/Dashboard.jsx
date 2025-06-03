import { FaBed, FaToggleOff, FaToggleOn, FaWalking } from 'react-icons/fa'
import Button from '../components/Button'
import styles from '../styles/dashboard.module.css'
import { LuWineOff } from 'react-icons/lu'
import { MdOutlineSmokingRooms, MdToggleOff, MdToggleOn } from 'react-icons/md'
import { PiPillFill } from 'react-icons/pi'
import { IoTimeOutline } from 'react-icons/io5'

import T1 from '../thumbnails/tool.png'
import T2 from '../thumbnails/organ.png'

export function Habit(props) {
    return (
        <div className={styles.habit}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <div className={styles.label}>
                <h3>{props.habit}</h3>
                <p>{props.stat}</p>
            </div>
        </div>
    )
}


export function Plan(props) {
    return (
        <div className={styles.plan}>
            <input type='checkbox' />
            <label>{props.text}</label>
        </div>
    )
}

export function Reminder(props) {
    return (
        <div className={styles.reminder}>
            <div className={styles.left}>
                <div className={styles.icon}>
                    {props.icon}
                </div>
                <p>{props.text}</p>
            </div>
            <button className={styles.rightBtn}>{props.active ? <MdToggleOn size={50} color="var(--green)" /> : <MdToggleOff size={50} color='#E5E7EA' /> }</button>
        </div>
    )
}


function BlogCard (props) {
    return (
        <div className={styles.blogCard}>
            <div className={styles.thumbnail}>
                <img src={props.thumbnail} />
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <Button label="Read more" />
        </div>
    )
}

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.riskScore}>
                <h2 className={styles.subHeading}>Your Fertility Risk Score</h2>
                <div className={styles.chartContainer}>
                    Pie Chart
                    <div>
                        <p>Your current risk score is high</p>
                        <Button label="View Full Report" />
                    </div>
                </div>
            </div>
            <div className={styles.habitTracker}>
                <h2 className={styles.subHeading}>Habit Tracker</h2>
                <div className={styles.habits}>
                    <Habit
                        icon={<FaBed />}
                        habit="Sleep"
                        stat="7 hrs avg"
                    />
                    <Habit
                        icon={<FaWalking />}
                        habit="Walking"
                        stat="3/7 days"
                    />
                    <Habit
                        icon={<LuWineOff />}
                        habit="Alcohol"
                        stat="1/7 days"
                    />
                    <Habit
                        icon={<MdOutlineSmokingRooms />}
                        habit="Smoking"
                        stat="2/7 days"
                    />
                </div>
            </div>
            <div className={styles.improvementPlan}>
                <h2 className={styles.subHeading}>Improvement Plan</h2>
                <div className={styles.plans}>
                    <Plan text="Week 1: Drink more water" />
                    <Plan text="Week 2: Reduce alcohol intake" />
                    <Plan text="Week 3: Eat more fruits & vegs" />
                    <Plan text="Week 4: Schedule check-up" />
                </div>
            </div>
            <div className={styles.smartReminders}>
                <div className={styles.top}>
                    <h2 className={styles.subHeading}>Smart Reminders</h2>
                    <p>Edit</p>
                </div>
                <div className={styles.reminders}>
                    <Reminder icon={<PiPillFill />} text="Take multivitamins" />
                    <Reminder icon={<FaWalking />} text="Walk for 30 minutes" active={true} />
                    <Reminder icon={<IoTimeOutline />} text="Track sleep" />
                </div>
            </div>
            <div className={styles.educationalTips}>
                <h2 className={styles.subHeading}>Educational Tips</h2>
                <div className={styles.blogs}>
                    <BlogCard thumbnail={T1} title="Male Fertility: When to see a Doctor" />
                    <BlogCard thumbnail={T2} title="What Every Man Should Know About Fertility" />
                </div>
            </div>
        </div>
    )
}
