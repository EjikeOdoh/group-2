import { FaBed, FaSnowflake } from 'react-icons/fa'
import styles from '../styles/habitTracker.module.css'
import RoundIcon from '../components/RoundIcon'
import { IoFlameOutline } from 'react-icons/io5'
import { LuWineOff } from 'react-icons/lu'
import { MdOutlineSmokingRooms } from 'react-icons/md'
import Bar from '../components/Bar'
import { FaPersonWalking } from 'react-icons/fa6'
import FBar from '../components/FBar'
import SleepChart from '../components/SleepChart'

import { getUserInfo } from '../api/utils'
import { useState, useEffect } from 'react'

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
               <Bar value={props.value} variant='determinate' />
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

    const [info, setUserInfo] = useState(0)
          
    useEffect(()=>{
        getUserInfo()
        .then(res=>{
            setUserInfo(res)
            console.log(res);
        })
    },[])

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
                        value={50}
                    />
                       <Habit
                        icon={<LuWineOff />}
                        habit="Alcohol intake"
                        unit="drinks"
                        hint="Try to limit this week"
                        value={50}
                    />
                       <Habit
                        icon={<FaPersonWalking />}
                        habit="Walking"
                        unit="steps"
                        hint="You're almost there"
                        value={50}
                    />
                       <Habit
                        icon={<MdOutlineSmokingRooms />}
                        habit="Smoking"
                        unit="days"
                        hint="Try to limit this week"
                        value={50}
                    />
                </div>
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
                    <FBar value={info.assessment} />
                   
                </div>
                <div className={styles.tipsContainer}>
                    <h3>Smart Tips</h3>
                    <div className={styles.tips}>
                        <p>Great job reducing alcohol this week</p>
                        <p>Try a 10-min walk today</p>
                    </div>
                </div>
            </div>

            <div className={styles.chart}>
                {/* Chart should come in here */}
                <SleepChart />
            </div>
        </div>
    )
}
