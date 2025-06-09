import styles from '../styles/settings.module.css'
import RoundIcon from '../components/RoundIcon'
import { RxPerson } from 'react-icons/rx'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { GiWallet } from 'react-icons/gi'


function Tab(props) {
    return (
        <button className={styles.tab}>
            <RoundIcon icon={props.icon} />
            <div>
                <h3>{props.label}</h3>
                <p>{props.det}</p>
            </div>
        </button>
    )
}

export default function Settings() {
    return (
        <div className={styles.container}>
            <h2>Settings</h2>

            <div className={styles.settings}>
                <Tab
                    icon={<RxPerson />}
                    label="Profile"
                    det="Edit your profile information"
                />

                <Tab
                    icon={<IoMdNotificationsOutline />}
                    label="Notifications"
                    det="Manage notifications preference"
                />

                <Tab
                    icon={<GiWallet />}
                    label="Account"
                    det="Subscriptions and billing"
                />
            </div>

        </div>
    )
}
