import AuthLayout from '../components/AuthLayout'
import styles from '../styles/signup.module.css'
import Cover from '../images/register.png'
import Input from '../components/Input'
import { FiEyeOff, FiFacebook } from 'react-icons/fi'
import Button from '../components/Button'
import LightBtn from '../components/LightBtn'
import { SiGoogle } from 'react-icons/si'
import { Link } from 'react-router'

export default function Signup() {



    const handleSignUp = (formData) => {
        const data = Object.fromEntries(formData)

        fetch('https://redde.pythonanywhere.com/user/register', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    return (
        <AuthLayout image={Cover}>
            <div className={styles.container}>

                <h1>Create Account</h1>

                <form action={handleSignUp} className={styles.myForm}>
                    <Input label="First Name" name="first_name" />
                    <Input label="Last Name" name="last_name" />
                    <Input label="Username" name="username" />
                    <Input label="Email Address" name="email" />
                    <Input label="Password"
                        name="password"
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

                <p className={styles.ownAccount}>Already have an account? <Link to="/login">Sign In</Link></p>

            </div>

        </AuthLayout>
    )
}
