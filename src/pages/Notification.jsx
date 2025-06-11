import styles from '../styles/settings.module.css'
import RoundIcon from '../components/RoundIcon'
import { RxPerson } from 'react-icons/rx'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { GiWallet } from 'react-icons/gi'
import { Tab } from './Settings';



export default function Settings() {
    return (
        <div className={styles.container}>
            <h2>NOTIFICATIONS</h2>

            <div className={styles.settings}>
                <Tab
                    icon={<RxPerson />}
                    label="Time for daily check-in!"
                    det="Don't forget to log your habits for today."
                    time="2h ago"
                />

                <Tab
                    icon={<IoMdNotificationsOutline />}
                    label="Your fertility report is ready"
                    det="see your report and personalised plan."
                    time="1d ago"
                />

                <Tab
                    icon={<GiWallet />}
                    label="Reminder:Upcoming health check-in"
                    det="You will have a check-up in one week"
                    time="June 06"
                />
            </div>

        </div>
    )
}
