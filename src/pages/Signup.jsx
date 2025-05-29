import AuthLayout from '../components/AuthLayout'
import styles from '../styles/signup.module.css'
import Cover from '../images/register.png'
import Input from '../components/Input'
import { FiEyeOff, FiFacebook } from 'react-icons/fi'
import Button from '../components/Button'
import LightBtn from '../components/LightBtn'
import { SiGoogle } from 'react-icons/si'

export default function Signup() {
    return (
        <AuthLayout image={Cover}>
            <div className={styles.container}>

                <h1>Create Account</h1>

                <form className={styles.myForm}>
                    <Input label="Full Name" />
                    <Input label="Email Address" />
                    <Input label="Password"
                        btn={<button>
                            <FiEyeOff />
                        </button>
                        }
                        notice="Must contain 8 characters"
                    />

                    <p>By creating an account,  you  agreed to the Terms and Private Policy. </p>

                    <Button label="Create Account" />


                </form>


                <p className={styles.alt}>Or</p>

                <div className={styles.btns}>
                    {/* Custom buttons */}
                    <LightBtn
                        icon={<SiGoogle color="var(--dark)" />}
                        label="Sign up with Google" />
                    <LightBtn
                        icon={<FiFacebook color="var(--dark)" size={26} />}
                        label="Sign up with Facebook" />
                </div>

                <p className={styles.ownAccount}>Already have an account? <span>Sign In</span></p>

            </div>

        </AuthLayout>
    )
}
