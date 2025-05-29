import { IoIosArrowRoundBack } from 'react-icons/io'
import styles from '../styles/authLayout.module.css'

export default function AuthLayout(props) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.nav}>
                    <button onClick={props.handleClick}>
                        <IoIosArrowRoundBack />
                        Back</button>
                </div>
                <div className={styles.parent}>
               
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>

            </div>
            <div>
                <img src={props.image} />
            </div>

        </div>
    )
}
