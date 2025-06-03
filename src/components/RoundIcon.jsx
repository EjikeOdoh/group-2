import styles from '../styles/roundIcon.module.css'

export default function RoundIcon(props) {
  return (
    <div className={styles.icon}>
        {props.icon}
    </div>
  )
}
