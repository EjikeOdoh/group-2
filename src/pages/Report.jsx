import React from 'react'
import styles from '../styles/report.module.css'
import Layout from '../components/Layout'
import Doc from '../images/doctor.png'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import Button from '../components/Button'
import { FaRegStar } from 'react-icons/fa'
import FBar from '../components/FBar'
import { useNavigate } from 'react-router'

export default function Report() {

    const navigate = useNavigate()

    return (
        <Layout image={Doc}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <button>
                        <IoIosArrowRoundBack />
                        Back</button>
                    <h3>My Fertility Report</h3>
                    <button className={styles.closeBtn}>
                        <IoClose />
                    </button>
                </div>
                <div className={styles.parent}>
                    <div className={styles.content}>
                        <div className={styles.heading}>
                            <h1>High Risk</h1>
                            {/* Add progress bar here */}

                                <FBar value={60} />

                            <p>Your current fertility risk is hight. Some changes are suggested</p>
                        </div>
                        <div className={styles.cards}>
                            <div className={styles.top}>
                                <div className={styles.card}>
                                    <h3>Risk Factors Identified</h3>
                                    <p>Your alcohol and sitting time may contribute to a high risk of fertility issues.</p>
                                </div>

                                <div className={styles.card}>
                                    <h3>See Your Progress</h3>
                                    <p>Track your habits over time and monitor changes to your fertility score.</p>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <FaRegStar size={24} color='var(--yellow)'/>
                                <div>
                                    <h3>Tips to Improve</h3>
                                    <p>Try to reduce alcohol intake and take regular breaks to stand and walk.</p>
                                </div>
                            </div>
                        </div>
                        <Button label="Go to dashboard" handleClick={()=>navigate('/')} />
                    </div>
                </div>



            </div>
        </Layout>

    )
}
