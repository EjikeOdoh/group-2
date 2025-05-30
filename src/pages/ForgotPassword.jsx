import AuthLayout from '../components/AuthLayout'
import styles from '../styles/reset.module.css'
import Cover from '../images/doc.png'
import Input from '../components/Input'
import Button from '../components/Button'
import { FaRegEnvelope } from 'react-icons/fa'

export default function ForgotPassword() {
    return (
        <AuthLayout image={Cover}>

            <div className={styles.container}>

                <div className={styles.heading}>
                    <h1>Forgot Password</h1>
                    <p>Enter email address associated with this account we’ll send an OTP for email verification.</p>
                </div>
                <form className={styles.myForm}>
                    <div className={styles.inputs}>
                        <Input
                            label="Email Address"
                            icon={<FaRegEnvelope />}
                        />

                      
                    </div>

                    <Button label="Send Code" />
                </form>

            </div>

        </AuthLayout>
    )
}
