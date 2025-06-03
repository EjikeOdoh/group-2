import { FaCanadianMapleLeaf, FaRegBell } from 'react-icons/fa'
import styles from '../styles/reminder.module.css'
import { Header } from './HabitTracker'
import RoundIcon from '../components/RoundIcon'
import { RiMapPin2Line } from 'react-icons/ri'
import { PiPillFill, } from "react-icons/pi";
import { GiRoastChicken } from 'react-icons/gi'
import { FaBottleWater } from 'react-icons/fa6'
import { CgGym } from 'react-icons/cg'
import { ImSleepy } from 'react-icons/im'

const data = [
    {
        time: "In 1hr",
        action: "Take Supplements",
        detail: "Omega 3 fatty acids - 500mg",
        icon: <PiPillFill />,
        stat: "Vitamin C - 1000mg",
        date: "today"
    },

    {
        time: "5:30 PM",
        action: "Workout",
        detail: "Strength training - Upper body",
        icon: <CgGym />,
        stat: "45 minutes",
        date: "tomorrow"
    },
    {
        time: "10:00 PM",
        action: "Sleep",
        detail: "Wind down routine",
        icon: <ImSleepy />,
        stat: "8 hours target",
        date: "next tomorrow"
    }
];

const groupedByDate = Object.groupBy(data, (x) => x.date);






export function Activity(props) {
    return (
        <div className={styles.activity}>
            <h3 className={styles.label}>{props.label}</h3>
            <div>
                {props.hasBar ? <>
                    <p className={styles.stats}>{props.stats}</p>
                    {/* Bar */}
                </> : <p className={styles.desc}>{props.desc}</p>}
            </div>
            <button>{props.cta}</button>
        </div>
    )
}

export function Action(props) {
    return (
        <div className={styles.action}>
            <div className={styles.left}>
                <RoundIcon icon={props.icon} />
                <div className={styles.texts}>
                    <h3>{props.action}</h3>
                    <p>{props.detail}</p>
                </div>
            </div>
            <button>{props.cta}</button>

        </div>
    )
}


export function Alert(props) {
    return (
        <div className={styles.alert}>
            <div className={styles.top}>
                <p>{props.time}</p>
                <h3>{props.action}</h3>
            </div>
            <div className={styles.bottom}>
                <RoundIcon icon={props.icon} />
                <div className={styles.texts}>
                    <p>{props.detail}</p>
                    <p>{props.stat}</p>
                </div>
            </div>
        </div>
    )
}

export function Category(props) {
    return (
        <div className={styles.category}>
            <h2>{props.day}</h2>
            <div className={styles.alerts}>
                {props.alerts.map(x => (
                    <Alert
                        key={x.action}
                        time={x.time}
                        action={x.action}
                        detail={x.detail}
                        icon={x.icon}
                        stat={x.stat}
                    />
                ))}
            </div>
        </div>
    )
}


export default function Reminder() {

    const alertCategories = Object.entries(groupedByDate).map(([date, activities]) => (

        <Category
            key={date}
            day={date}
            alerts={activities}
        />

    ))

    return (
        <div className={styles.container}>
            <div className={styles.activities}>
                <Header
                    label="Ready for change? Here's your custom plan"
                    icon={<FaCanadianMapleLeaf size={30} color="#60B5FF" />}
                />
                <div className={styles.activityCards}>
                    <Activity
                        label="Sleep"
                        hasBar={true}
                        stats="5h 20m"
                        cta="Track progress"
                    />

                    <Activity
                        label="Nutrition"
                        hasBar={false}
                        desc="Fruits & Veggies"
                        cta="Log Now"
                    />
                    <Activity
                        label="Steps"
                        hasBar={true}
                        stats="1,500/10,000 steps"
                        cta="Steps in"
                    />

                    <Activity
                        label="Recovery"
                        hasBar={false}
                        desc="Noticed high stress lately - take a 5 min breathing session."
                        cta="Take a break"
                    />
                </div>
            </div>
            <div className={styles.actions}>
                <Action
                    icon={<FaRegBell />}
                    action="Weekly Reminder"
                    detail="Reduce cigarettes & alcohol intake"
                    cta="Edit"
                />

                <Action
                    icon={<RiMapPin2Line />}
                    action="Visit Clinic"
                    detail="Find nearby doctors & clinics"
                    cta="Locate"
                />
            </div>
            <div className={styles.alerts}>
                {alertCategories}
            </div>
        </div>
    )
}
