import styles from '../styles/sidebar.module.css'
import Logo from '../images/logo.svg'
import { NavLink } from 'react-router'
import { RxDashboard } from 'react-icons/rx'
import { MdOutlineScore } from 'react-icons/md'
import { SiPivotaltracker } from 'react-icons/si'
import { BsGraphUp } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { LiaCogSolid } from 'react-icons/lia'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export function MenuItem(props) {
    return (
        <NavLink to={props.to} className={({ isActive }) => isActive ? styles.active : styles.menuItem} onClick={props.handleClick}>
            {props.icon} {props.label}
        </NavLink>
    )
}

export default function SideBar(props) {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <NavLink className={styles.logo}>
                    <img src={Logo} alt="logo" />
                </NavLink>
                <div>
                    <MenuItem
                        label="Dashboard"
                        icon={<RxDashboard size={20} />}
                        to="/"
                        handleClick={props.handleClick}
                    />

                    <MenuItem
                        label="Fertility Score"
                        icon={<MdOutlineScore size={20} />}
                        to="/fertility-report"
                        handleClick={props.handleClick}
                    />

                    <MenuItem
                        label="Habit Tracker"
                        icon={<SiPivotaltracker size={20} />}
                        to="habit-tracker"
                        handleClick={props.handleClick}
                    />

                    <MenuItem
                        label="Improvement Plan"
                        icon={<BsGraphUp size={20} />}
                        to="plan"
                        handleClick={props.handleClick}
                    />

                    <MenuItem
                        label="Schedule/Reminder"
                        icon={<FaRegBell size={20} />}
                        to="/schedule"  handleClick={props.handleClick}
                    />

                    <MenuItem
                        label="Education/Learn"
                        icon={<BiBook size={20} />}
                        to="/education"
                        handleClick={props.handleClick}
                    />
                </div>

            </div>
            <div className={styles.bottom}>
                <MenuItem
                    label="Settings"
                    icon={<LiaCogSolid size={20} />}
                    to="/settings"
                    handleClick={props.handleClick}
                />

                <button className={styles.menuItem} onClick={props.handleLogout}>
                    <RiLogoutBoxRLine size={20} /> Log Out
                </button>

            </div>

        </div>
    )
}
