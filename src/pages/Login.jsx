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
import { Link } from 'react-router'
import { useContext } from 'react'
import { AuthReducerContext } from '../context/AuthContext'

export default function Login() {

    const dispatch = useContext(AuthReducerContext)

    const handleLogin = async () => {

        // try {
        //     const res = await fetch("https://redde.pythonanywhere.com/user/login")
        // } catch (error) {
        //     console.log(error.message)
        // }
        dispatch({
            type: true
        })
    }

    return (
        <AuthLayout image={Cover}>
            <div className={styles.container}>

                <h1>Welcome back! Select method to log in:</h1>

                <form className={styles.myForm}>
                    <Input label="Email Address"
                        icon={<BiEnvelope style={{ minWidth: '16px' }} />} />
                    <Input label="Password"
                        icon={<IoLockClosedOutline style={{ minWidth: '16px' }} />}
                        btn={<button>
                            <FiEyeOff style={{ minWidth: '16px' }} />
                        </button>
                        }
                    />

                    <Link to="/forgot-password" className={styles.forgotPassword}>Forgot password </Link>

                    <Button label="Log in" handleClick={handleLogin} />


                </form>


                <p className={styles.alt}>Or continue with email</p>

                <div className={styles.btns}>
                    {/* Custom buttons */}
                    <LightBtn

                        handleClick={handleLogin}
                        icon={<SiGoogle color="var(--dark)" />}
                        label="Sign in with Google" />
                    <LightBtn
                        icon={<FiFacebook color="var(--dark)" size={26} />}
                        label="Sign in with Facebook" />
                </div>

                <p className={styles.ownAccount}>Don't have an account? <Link to="/register">Create an account</Link></p>

            </div>

        </AuthLayout>
    )
}
