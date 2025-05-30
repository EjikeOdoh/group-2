import AuthLayout from '../components/AuthLayout'
import styles from '../styles/reset.module.css'
import Cover from '../images/doc.png'
import Input from '../components/Input'
import { FiEyeOff } from 'react-icons/fi'
import Button from '../components/Button'

export default function ResetPassword() {
    return (
        <AuthLayout image={Cover}>

            <div className={styles.container}>

                <div className={styles.heading}>
                    <h1>Reset Password</h1>
                    <p>The password should be different from the previous used passwords</p>
                </div>
                <form className={styles.myForm}>
                    <div className={styles.inputs}>
                        <Input
                            label="New Password"
                            btn={<button><FiEyeOff /></button>}
                        />

                        <Input
                            label="Confirm New Password"
                            btn={<button><FiEyeOff /></button>}
                        />
                    </div>

                    <Button label="Reset Password" />
                </form>

            </div>

        </AuthLayout>
    )
}
