import { FaBed, FaSnowflake } from 'react-icons/fa'
import styles from '../styles/habitTracker.module.css'
import RoundIcon from '../components/RoundIcon'
import { IoFlameOutline } from 'react-icons/io5'
import { LuWineOff } from 'react-icons/lu'
import { MdOutlineSmokingRooms } from 'react-icons/md'

export function Header(props) {
    return (
        <div className={styles.header}>
            <p className={styles.label}>{props.label}</p>
            {props.icon}
        </div>
    )
}

export function Habit(props) {
    return (
        <div className={styles.habit}>
            <div className={styles.top}>
                <RoundIcon icon={props.icon} />
                <div className={styles.label}>
                    <p>{props.habit}</p>
                    <p>({props.unit})</p>
                </div>
            </div>
            <div className={styles.bottom}>
                {/* Progress bar here */}
                <small>{props.hint}</small>
            </div>
        </div>
    )
}

export function Streak(props) {
    return (
        <div className={styles.streak}>
            {props.icon}
            <p>{props.label} streak</p>
        </div>
    )
}

export default function HabitTracker() {
    return (
        <div className={styles.container}>
            <div className={styles.habits}>
                <Header
                    label="Track your lifestyle and see how it impacts your fertility"
                    icon={<FaSnowflake color='#60B5FF' size={30} />}
                />
                <div className={styles.habitCards}>
                    <Habit
                        icon={<FaBed />}
                        habit="Sleep"
                        unit="hrs"
                        hint="Better rest, better hormones"
                    />
                       <Habit
                        icon={<FaBed />}
                        habit="Sleep"
                        unit="hrs"
                        hint="Better rest, better hormones"
                    />
                       <Habit
                        icon={<FaBed />}
                        habit="Sleep"
                        unit="hrs"
                        hint="Better rest, better hormones"
                    />
                       <Habit
                        icon={<FaBed />}
                        habit="Sleep"
                        unit="hrs"
                        hint="Better rest, better hormones"
                    />
                </div>
            </div>
            <div className={styles.chart}>Chart
                {/* Chart should come in here */}
            </div>
            <div className={styles.stats}>
                <div className={styles.streaks}>
                    <Streak 
                        icon={<IoFlameOutline color='#60B5FF' size={24} />}
                        label="Sleep"
                    />
                       <Streak 
                        icon={<LuWineOff color='#60B5FF' size={24} />}
                        label="Alcohol"
                    />
                       <Streak 
                        icon={<MdOutlineSmokingRooms color='#60B5FF' size={24} />}
                        label="Smoking"
                    />
                </div>
                <div className={styles.score}>
                    {/* Bar should come in here */}
                    <div className={styles.bottom}>
                         <p>Fertility Score</p>
                         <p>45%</p>
                    </div>
                   
                </div>
                <div className={styles.tipsContainer}>
                    <h3>Smart Tips</h3>
                    <div className={styles.tips}>
                        <p>Great job reducing alcohol this week</p>
                        <p>Try a 10-min walk today</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
