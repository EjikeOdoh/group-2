import React from 'react'
import styles from '../styles/report.module.css'
import Layout from '../components/Layout'
import Doc from '../images/doctor.png'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import Button from '../components/Button'

export default function Report() {
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
                <div className={styles.content}>
                    <div className={styles.heading}></div>
                    <div className={styles.cards}></div>
                    <Button label="Go to dashboard" />
                </div>


            </div>
        </Layout>

    )
}
