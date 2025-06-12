import React from 'react'
import styles from '../styles/report.module.css'
import Button from '../components/Button'
import { FaRegStar } from 'react-icons/fa'
import FBar from '../components/FBar'
import { useNavigate } from 'react-router'
import { getUserInfo } from '../api/utils'
import { useState, useEffect } from 'react'

export default function FertilityReport() {

    const navigate = useNavigate()

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
            <div className={styles.parent}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h1>{info.assessment >= 50? "High" : "Low"} Risk</h1>
                        <FBar value={info.assessment} />
                        <p>Your current fertility risk is {info.assessment >= 50? "High" : "Low"}. Some changes are suggested</p>
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
                            <FaRegStar size={24} color='var(--yellow)' />
                            <div>
                                <h3>Tips to Improve</h3>
                                <p>Try to reduce alcohol intake and take regular breaks to stand and walk.</p>
                            </div>
                        </div>
                    </div>
                    <Button label="Take another Assessement" handleClick={() => navigate("/questions")} />
                </div>
            </div>

        </div>


    )
}
