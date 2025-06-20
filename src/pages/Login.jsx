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
import { useContext, useState } from 'react'
import { AuthReducerContext } from '../context/AuthContext'
import { manageServerCall } from '../api/api'
import PasswordInput from '../components/PasswordInput'

export default function Login() {

    const dispatch = useContext(AuthReducerContext)

    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = (e) => {

        dispatch({
            type: true,
            token: 111111
        })
        // e.preventDefault();
        // const formData = new FormData(e.target);
        // console.log(formData);

        // const data = Object.fromEntries(formData)

        // console.log(data);
        // setIsLoading(true)
        // manageServerCall("post","user/login/",{},data)
        // .then((data)=>{
        //     dispatch({
        //         type: true,
        //         token: true
        //     })
        // })
        // .catch(err=>{
        //     alert("Invalid Credentials")
        // }).finally(()=>setIsLoading(false))
    }

    return (
        <AuthLayout image={Cover}>
            <div className={styles.container}>

                <h1>Welcome back! Select method to log in:</h1>

                <form className={styles.myForm} onSubmit={(e)=>{handleLogin(e)}}>
                    <Input label="Username" name="username"
                        icon={<BiEnvelope style={{ minWidth: '16px' }} />} />

                    <PasswordInput />

                    <Link to="/forgot-password" className={styles.forgotPassword}>Forgot password </Link>

                    <Button label="Log in" loading={isLoading} />


                </form>


                <p className={styles.alt}>Or continue with email</p>

                <div className={styles.btns}>
                    {/* Custom buttons */}
                    <LightBtn
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
