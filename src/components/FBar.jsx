import styles from '../styles/fBar.module.css'
import Bar from './Bar'

export default function FBar(props) {
    return (
        <div>
            <Bar variant='determinate' value={props.value} color={props.value > 50 ? '#EE443F' : "#43B75D"} />
            <div className={styles.bottom}>
                <p>Fertility Score</p>
                <p>{props.value}%</p>
            </div>
        </div>
    )
}
