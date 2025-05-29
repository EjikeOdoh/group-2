import styles from '../styles/lightBtn.module.css'

export default function LightBtn(props) {
  return (
       <button onClick={props.handleClick} className={styles.btn}>
           {props.icon}
           {props.label}
       </button>
  )
}
