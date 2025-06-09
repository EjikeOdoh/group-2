import { Chip } from '@mui/material'
import styles from '../styles/education.module.css'
import Health from '../images/health.png'
import Dialog from '../components/Dialog'
import { useRef } from 'react'
import { closeModal, openModal } from '../util/modalFunctions'
import Button from '../components/Button'
import { FaCheck, FaQuestion } from 'react-icons/fa'
import Thumbnail from '../thumbnails/organ.png'

export function Card(props) {
    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <p>{props.label}</p>
        </div>
    )
}

function Row(props) {
    return (
        <div className={styles.row}>
            <div className={styles.line}>
                <FaQuestion style={{minWidth: '16px'}} />
                <h3>{props.myth}</h3>
            </div>
            <div className={styles.line}>
                <FaCheck style={{minWidth: '16px'}} />
                <p>{props.fact}</p>
            </div>
        </div>
    )
}

export default function Education() {

    const blogRef = useRef(null)

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <h2>Articles</h2>
                    <div className={styles.chips}>
                        <Chip
                            label="Nutrition"
                            sx={{
                                backgroundColor: "var(--light-bg)",
                                fontSize: '1rem',
                                fontWeight: 600,
                                fontFamily: 'inherit',
                                color: "var(--primary-border)",
                                paddingInline: "20px"
                            }} />

                        <Chip
                            label="Lifestyle"
                            sx={{
                                backgroundColor: "var(--light-bg)",
                                fontSize: '1rem',
                                fontWeight: 600,
                                fontFamily: 'inherit',
                                color: "var(--primary-border)",
                                paddingInline: "20px"
                            }} />

                        <Chip
                            label="Myths"
                            sx={{
                                backgroundColor: "var(--light-bg)",
                                fontSize: '1rem',
                                fontWeight: 600,
                                fontFamily: 'inherit',
                                color: "var(--primary-border)",
                                paddingInline: "20px"
                            }} />
                    </div>
                </div>
                <div className={styles.mainCard}>
                    <div className={styles.cover}>
                        <img src={Health} />
                    </div>
                    <div className={styles.texts}>
                        <h3>Male Fertility</h3>
                        <p>Myths vs Facts</p>
                        <button onClick={() => openModal(blogRef)}>Read more</button>
                    </div>
                </div>

                <div className={styles.blueCard}>
                    <h3>Life Factors Affecting Fertility</h3>
                    <p>Understanding how daily habits influence reproductive health.</p>
                </div>

                <div className={styles.blueCard}>
                    <h3>Understanding Male Fertility: What Every Man Should Know</h3>
                    <p>Clear, clinical insights into sperm health, hormones, and reproductive potential.</p>
                </div>
            </div>
            <div className={styles.right}>
                <Card
                    title="Improving Sperm Health: Tips and Advice"
                    label="A medical guide to enhancing male reproductive health."
                />

                <Card
                    title="A Guide to Male Fertility Supplements"
                    label="What the research says about supplements for reproductive health."
                />

                <Card
                    title="Nutrition in Fertility"
                    label="The role of a balanced diet in enhancing fertility."
                />
            </div>

            <Dialog ref={blogRef}>
                <div className={styles.modal}>
                    <div className={styles.top}>
                        <div className={styles.heading}>
                            <h3>Male Fertility: <br />“Myths vs Facts”</h3>
                            <div className={styles.thumbnail}>
                                <img src={Thumbnail} />
                            </div>
                        </div>
                        <p>Many misconceptions surround male fertility. Let’s bust some common myths and reveal the facts every man should know.</p>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.facts}>
                            <Row
                                myth="Myth - Age Doesn’t Affect Male Fertility"
                                fact="Fact: While men can father children later in life, fertility does decline with age."
                            />

                            <Row
                                myth="Myth - Wearing Tight Underwears Lowers Fertility"
                                fact="Fact: The idea that tight underwear causes infertility is most exaggerated."
                            />

                            <Row
                                myth="Myth - Frequent Sex Reduces Sperm Quality"
                                fact="Fact: Regular ejaculation (every 2–3 days) can actually improve sperm health. Prolonged abstinence can cause a build-up of poor-quality sperm."
                            />

                        </div>
                        <div className={styles.readMore}>
                            <Button label="Read More" handleClick={()=>closeModal(blogRef)} />
                        </div>
                    </div>

                </div>
            </Dialog>
        </div>
    )
}
