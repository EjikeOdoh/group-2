import AuthLayout from '../components/AuthLayout'
import styles from '../styles/signup.module.css'
import Cover from '../images/login.png'
import Input from '../components/Input'
import { FiEyeOff, FiFacebook } from 'react-icons/fi'
import Button from '../components/Button'
import LightBtn from '../components/LightBtn'
import { SiGoogle } from 'react-icons/si'
import { BiEnvelope } from 'react-icons/bi'
import { IoLockClosedOutline } from 'react-icons/io5'

export default function Login() {
    return (
        <AuthLayout image={Cover}>
            <div className={styles.container}>

                <h1>Welcome back! Select method to log in:</h1>

                <form className={styles.myForm}>
                    <Input label="Email Address"
                        icon={<BiEnvelope />} />
                    <Input label="Password"
                    icon={<IoLockClosedOutline />}
                        btn={<button>
                            <FiEyeOff />
                        </button>
                        }
                    />

                    <a className={styles.forgotPassword}>Forgot password </a>

                    <Button label="Log in" />


                </form>


                <p className={styles.alt}>Or continue with email</p>

                <div className={styles.btns}>
                    {/* Custom buttons */}
                    <LightBtn
                        icon={<SiGoogle color="var(--dark)" />}
                        label="Sign up with Google" />
                    <LightBtn
                        icon={<FiFacebook color="var(--dark)" size={26} />}
                        label="Sign up with Facebook" />
                </div>

                <p className={styles.ownAccount}>Don't have an account? <span>Create an account</span></p>

            </div>

        </AuthLayout>
    )
}
