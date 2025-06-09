import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import styles from '../styles/plan.module.css'
import { Card } from './Education'
import { useRef, useState } from 'react'
import { Radio } from '@mui/material'
import { LuWineOff } from 'react-icons/lu'
import { IoCheckmarkCircleOutline, IoClose, IoMoonOutline } from 'react-icons/io5'
import { LiaSmokingBanSolid } from 'react-icons/lia'
import { FiLock } from 'react-icons/fi'
import Dialog from '../components/Dialog'
import { BiShieldPlus } from 'react-icons/bi'
import Button from '../components/Button'
import { closeModal, openModal } from '../util/modalFunctions'
import { SlCheck } from 'react-icons/sl'
import { FaRegCheckCircle } from 'react-icons/fa'


function Row(props) {
    return (
        <div className={styles.reminder}>
            <div className={styles.left}>
                <div className={styles.icon}>
                    {props.icon}
                </div>
                <p>{props.text}</p>
            </div>
            <Radio
                onChange={props.handleChange}
                name={props.name}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 28,
                    },
                }}

            />
        </div>
    )
}


function Week(props) {

    const activeStyle = {
        color: "#2B5173",
        fontWeight: 600
    }

    return (
        <div className={styles.week}>
            <button onClick={props.handleClick} style={props.active ? activeStyle : undefined}>Week {props.week}</button>
            {
                props.active ? <div className={styles.activities}>
                    <Row
                        text="Cut alcohol by 50% this week"
                        icon={<LuWineOff />}
                    />

                    <Row
                        text="Sleep at least 7 hours"
                        icon={<IoMoonOutline />}
                    />

                    <Row
                        text="Reduce smoking by 70%"
                        icon={<LiaSmokingBanSolid />}
                    />
                </div> : null
            }

        </div>
    )
}

function List(props) {
    return (
        <div className={styles.listItem}>
            <FaRegCheckCircle size={24} color='#43B75D' />
            <p>{props.label}</p>
        </div>
    )
}

export default function Plan() {

    const milestoneRef = useRef(null)
    const monthlyPlanRef = useRef(null)
    const yearlyPlanRef = useRef(null)
    const successRef = useRef(null)

    const [active, setActive] = useState(1)
    const [week, setWeek] = useState(1)

    const activeStyle = {
        backgroundColor: "#EFF8FF"
    }

    const selectPlan = (num) => {
        setActive(num)
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <p>A personalised plan to help improve your fertility health, habits and lifestyle.</p>

                    <div className={styles.toggleBtns}>
                        <button
                            onClick={() => selectPlan(1)}
                            style={active === 1 ? activeStyle : undefined} className={styles.toggleBtn}>
                            30-Day Plan
                        </button>
                        <button
                            onClick={() => selectPlan(2)}
                            style={active === 2 ? activeStyle : undefined} className={styles.toggleBtn}>
                            60-Day Plan
                        </button>
                    </div>
                    <div className={styles.content}>
                        {
                            active === 1 ?
                                <>
                                    <div className={styles.weeks}>
                                        <Week week={1} active={week === 1} handleClick={() => setWeek(1)} />
                                        <Week week={2} active={week === 2} handleClick={() => setWeek(2)} />
                                        <Week week={3} active={week === 3} handleClick={() => setWeek(3)} />
                                        <Week week={4} active={week === 4} handleClick={() => setWeek(4)} />
                                    </div>
                                    {
                                        active === 1 ? <div className={styles.bottom}>
                                            <RiMoneyDollarBoxLine size={24} />
                                            <div>
                                                <h3>Premium Plan</h3>
                                                <p>20% discount for Premium Plan to get full personalized plans</p>
                                                <button className={styles.cta}>Upgrade to plan</button>
                                            </div>
                                        </div> : null
                                    }</>
                                :
                                <div className={styles.lock}>
                                    <h3>60-Day Plan</h3>
                                    <div>
                                        <FiLock size={96} />
                                        <p>Unlock the personalized 60-day plan</p>
                                        <button>Upgrade to Premium</button>
                                    </div>
                                </div>
                        }



                    </div>
                </div>


            </div>
            <div className={styles.right}>
                <h2>
                    Recommended Tips
                </h2>
                <div className={styles.hints}>
                    <Card
                        title="Smoking"
                        label="Avoid smoking tobacco or other substances, to reduce fertility risk."
                    />

                    <Card
                        title="Sleep"
                        label="Try to get at least 7 hours of sleep per night."
                    />

                    <Card
                        title="Alcohol Intake"
                        label="Limiting/avoiding alcohol consumption would help with the fertility hormones."
                    />
                    <Card
                        title="Stress Management"
                        label="Find time to relax and unwind after work."
                    />
                </div>
            </div>

            {/* Modals */}


            {/* Milestone dialog */}

            <Dialog ref={milestoneRef}>
                <div className={styles.modal}>
                    <BiShieldPlus color='#CEE8FF' size={150} />
                    <div className={styles.salute}>
                        <h2>WELL DONE</h2>
                        <p>Week 1 Milestone Completed!!!!!</p>
                    </div>
                    <Button label="Okay"
                        handleClick={() => closeModal(milestoneRef)}
                    />
                </div>
            </Dialog>

            {/* success dialog */}

            <Dialog ref={successRef}>
                <div className={styles.modal}>
                    <SlCheck color='#43B75D' size={150} />
                    <div className={styles.salute}>
                        <h2>Payment Successful</h2>
                        <p>Successfully subscribed!!!!!</p>
                    </div>
                    <Button label="Okay"
                        handleClick={() => closeModal(successRef)}
                    />
                </div>
            </Dialog>

            {/* monthly plan dialog */}

            <Dialog ref={monthlyPlanRef}>
                <div className={styles.modal}>
                    <button
                        onClick={() => closeModal(monthlyPlanRef)}
                        className={styles.closeBtn}>
                        <IoClose size={24} />
                    </button>
                    <div className={styles.label}>
                        <h3>PREMIUM</h3>
                        <h3>$10 <br /> /month </h3>
                    </div>
                    <div className={styles.list}>
                        <List
                            label="Personalized plan"
                        />
                        <List
                            label="Weekly progress review"
                        />
                        <List
                            label="Advanced tips & articles"
                        />
                    </div>
                    <Button label="Buy Premium"
                        handleClick={() => closeModal(monthlyPlanRef)}
                    />
                </div>
            </Dialog>

            {/* yearly plan dialog */}

            <Dialog ref={yearlyPlanRef}>
                <div className={styles.modal}>
                    <button
                        onClick={() => closeModal(yearlyPlanRef)}
                        className={styles.closeBtn}>
                        <IoClose size={24} />
                    </button>
                    <div className={styles.label}>
                        <h3>PREMIUM</h3>
                        <h3>$60 <br /> /yearly </h3>
                    </div>
                    <div className={styles.list}>
                        <List
                            label="Personalized plan"
                        />
                        <List
                            label="Weekly progress review"
                        />
                        <List
                            label="Advanced tips & articles"
                        />
                        <List
                            label="Doctor’s check-up & reminder"
                        />
                        <List
                            label="Save 20% with yearly billing"
                        />
                    </div>
                    <Button label="Buy Premium"
                        handleClick={() => closeModal(yearlyPlanRef)}
                    />
                </div>
            </Dialog>
        </div>
    )
}
