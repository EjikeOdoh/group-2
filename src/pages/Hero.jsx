import styles from '../styles/hero.module.css'
import Cover from '../images/cover.png'
import Button from '../components/Button'

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <h1>Understand your fertility, improve your future.</h1>
                <p>Build better habits, lower your risk, and get personalized recommendations for a more fertile tomorrow
                </p>
                <Button label="Start Your Assessment" />
            </div>
            <div className={styles.cover}>
                <img src={Cover}/>
            </div>
        </div>
    )
}
