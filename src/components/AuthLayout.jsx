import { IoIosArrowRoundBack } from 'react-icons/io'
import styles from '../styles/authLayout.module.css'
import { useNavigate } from 'react-router'

export default function AuthLayout(props) {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.nav}>
                    <button onClick={()=>navigate(-1)}>
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
