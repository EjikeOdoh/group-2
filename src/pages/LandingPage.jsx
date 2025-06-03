import styles from '../styles/landingPage.module.css'
import Logo from '../images/logo.svg'
import Drug from '../images/medication.png'
import { TbNotes } from 'react-icons/tb'
import { FaInstagram, FaMinus, FaPlus } from 'react-icons/fa'
import { CiLinkedin, CiTwitter } from 'react-icons/ci'

// images for card components
import Plant from '../images/plant.png'
import Star from '../images/star.png'
import Cardio from '../images/cardio.png'
import Shelf from '../images/bookshelf.png'
import { GrDocumentTransfer } from 'react-icons/gr'
import { VscGraphLine } from 'react-icons/vsc'
import { LuLeaf } from 'react-icons/lu'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'




function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <img src={props.icon} />
            </div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

function Step(props) {
    return (
        <div className={styles.step}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <h3>Step {props.number}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

function Item(props) {

    const activeStyle = {
        backgroundColor: "#EFF8FF",
        border: "1px solid #CEE8FF",
        borderRadius: "12px"

    }

    return (
        <div style={props.active === true ? activeStyle : undefined} className={styles.item}>
            <div className={styles.question}>
                <p style={props.active === true ? { fontWeight: 600 } : undefined}>{props.question}</p>
                <button onClick={() => props.handleClick(props.id)}>
                   {
                    props.active === true ? <FaMinus /> :  <FaPlus />
                   }
                </button>
            </div>
            {
                props.active === true ? <p>{props.answer}</p> : null
            }

        </div>
    )
}


function FooterCol(props) {

    const p = props.options.map(x => (<p key={x}>{x}</p>))

    return (
        <div className={styles.footerCol}>
            <h3>{props.heading}</h3>
            {p}
        </div>
    )
}

export default function LandingPage() {

    const [questions, setQuestions] = useState([
        {
            "id": 1,
            "active": true,
            "question": "How accurate are the fertility insights?",
            "answer": "Our insights are based on the latest scientific research and tailored to your personal data. While we can't replace medical tests, we provide reliable guidance to help you understand your fertility better."
        },
        {
            "id": 2,
            "active": false,
            "question": "Is my data secure?",
            "answer": "Absolutely. We use bank-level encryption and never share your personal health data with third parties without your explicit consent."
        },
        {
            "id": 3,
            "active": false,
            "question": "Can women use this app too?",
            "answer": "While our current focus is on male fertility, we're developing features for couples. Women may find some general wellness insights helpful, but most content is male-specific."
        },
        {
            "id": 4,
            "active": false,
            "question": "What habits does the app track?",
            "answer": "We track factors like sleep, exercise, nutrition, stress, and exposure to environmental toxins - all of which research shows can impact sperm health and fertility."
        },
        {
            "id": 5,
            "active": false,
            "question": "Do you offer medical advice?",
            "answer": "We provide educational information and lifestyle recommendations, but always consult a healthcare professional for medical advice or if you have specific fertility concerns."
        }
    ])

    const selectQ = (id) => {
        console.log(id)
        setQuestions(prev => prev.map(q => {
            if (q.id === id) {
                return { ...q, active: true }
            } else {
                return { ...q, active: false }
            }
        }))
    }

    const faqContent = questions.map(question => {
        return (
            <Item
                key={question.id}
                id={question.id}
                question={question.question}
                answer={question.answer}
                active={question.active}
                handleClick={selectQ}
            />
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.bg}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="Logo" />
                    </div>

                    
                    <ul className={styles.menu}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>

                    <div className={styles.btns}>
                        <button className={styles.signInBtn}>Sign In</button>
                        <button className={styles.signUpBtn}>Sign Up</button>
                    </div>


                    <button className={styles.menuBtn}>
                        <MdMenu size={24} />
                    </button>

                </nav>

                <div className={styles.hero}>
                    <h1>Understand your <span>fertility,</span> improve your future.</h1>
                    <p>Build better habits, lower your risk, and get personalized
                        recommendations for a more fertile tomorrow.</p>
                    <button>Start Your Assessment</button>
                </div>
            </div>


            <div className={styles.cards}>
                <Card
                    icon={Plant}
                    title="Habit & Lifestyle Tracker"
                    desc="Log habits like alcohol intake, smoking, and sleep. Visualize their impact over time and can earn streak badges for consistency."
                />

                <Card
                    icon={Star}
                    title="Custom Improvement Plan"
                    desc="Receive tailored 30 or 60 day plans with weekly goals to improve fertility markers. Premium users unlock deeper guidance and milestone tracking."
                />
                <Card
                    icon={Cardio}
                    title="Personalized Fertility Insight"
                    desc="A clear picture of your fertility health with our assessment tools based on your lifestyle, habits and history"
                />
                <Card
                    icon={Shelf}
                    title="Educational Hub"
                    desc="Explore doctor-reviewed article, myth-busting content to stay informed about male fertility and reproductive health."
                />
            </div>

            <div className={styles.steps}>
                <h2>How It Works</h2>
                <div className={styles.content}>
                    <Step

                        icon={<TbNotes />}
                        number={1}
                        desc="Sign Up & Complete Questionnaire"

                    />

                    <Step

                        icon={<GrDocumentTransfer />}
                        number={2}
                        desc="Get Your Risk Score & Report"

                    />

                    <Step

                        icon={<VscGraphLine />}
                        number={3}
                        desc="Track Progress on Your Dashboard"

                    />

                    <Step

                        icon={<LuLeaf />}
                        number={4}
                        desc="Follow Your Habit Plan"

                    />
                </div>
            </div>

            <div className={styles.faq}>
                <h2>Your questions answered</h2>
                <div className={styles.accordion}>
                 {faqContent}
                </div>
            </div>

            <div className={styles.cta}>
                <div className={styles.texts}>
                    <h1>Take an in-depth fertility assessment
                        to understand your unique
                        health profile.</h1>
                    <button>Start Assessment</button>
                </div>
                <div className={styles.image}>
                    <img src={Drug} alt="Temi will provide it" />
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="logo" />
                    </div>
                    <small>Your Fertility Companion</small>
                    <div className={styles.smIcons}>
                        <FaInstagram size={24} />
                        <CiLinkedin size={28} />
                        <CiTwitter size={28} />

                    </div>
                </div>
                <div className={styles.right}>

                    <FooterCol
                        heading="Company"
                        options={["About us", "Contact us", "Pricing"]}
                    />

                    <FooterCol
                        heading="Account"
                        options={["Help center", "Terms of service", "Privacy policy"]}
                    />

                    <FooterCol
                        heading="Contact"
                        options={["info@spenic.org", "+2348030004000"]}
                    />
                </div>
            </div>
        </div>
    )
}
