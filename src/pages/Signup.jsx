import AuthLayout from '../components/AuthLayout'
import styles from '../styles/signup.module.css'
import Cover from '../images/register.png'
import Input from '../components/Input'
import { FiEyeOff, FiFacebook } from 'react-icons/fi'
import Button from '../components/Button'
import LightBtn from '../components/LightBtn'
import { SiGoogle } from 'react-icons/si'
import { Link, useNavigate } from 'react-router'
import { manageServerCall } from '../api/api'

export default function Signup() {

    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)

        console.log(data);
        manageServerCall('post','user/register/',{},data)
        .then(data => {
            console.log(data)
            // redirect here to questions or dashboard
            navigate('/questions');
        })
        .catch(err => {
            console.log(err)
            const errors = Object.values(err)
            alert(errors[0])
        })

    }

    return (
        <AuthLayout image={Cover}>
            <div className={styles.container}>

                <h1>Create Account</h1>

                <form onSubmit={e=>{handleSignUp(e)}} className={styles.myForm}>
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
