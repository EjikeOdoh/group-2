import styles from '../styles/input.module.css'

export default function Input(props) {
  return (
    <div className={styles.container}>
        <label>{props.label}</label>
        <div className={styles.input}>
            {props.icon}
            <input placeholder={props.placeholder} />
            {props.btn}
        </div>
        <small>{props.notice}</small>
    </div>
  )
}
