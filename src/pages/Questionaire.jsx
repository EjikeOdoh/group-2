import React, { useContext, useRef, useState } from 'react'
import Layout from '../components/Layout'
import Medic from '../images/medic.png'
import styles from '../styles/questionaire.module.css'
import Option from '../components/Option'
import { IoIosArrowRoundBack, IoMdCheckmark } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import Button from '../components/Button'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { closeModal, openModal } from '../util/modalFunctions'
import Dialog from '../components/Dialog'
import { useNavigate } from 'react-router'
import { AuthReducerContext } from '../context/AuthContext'
import { manageServerCall } from '../api/api'



export default function Questionaire() {

  const navigate = useNavigate()
  const dispatch = useContext(AuthReducerContext)

  const questionaireRef = useRef(null)

  const [index, setIndex] = useState(1)
  const [formData, setFormData] = useState({})
  const [userResponse, setResponse] = useState({})

  const assessmentWeight = {
    age: {
      "18-24": 0,
      "25-30": 2,
      "31-36": 4,
      "37 or older": 5
    },
    childhoodIllness: {
      "None": 0,
      "Chicken Pox": 5,
      "Mumps": 5,
      "Measles": 5
    },
    physicalTrauma: {
      "Yes": 5,
      "No": 0,
      "None": 0
    },
    consumeAlcohol: {
      "Never": 0,
      "Occasionally (1-2 times/month)": 2,
      "Weekly (1-2 times/week)": 4,
      "Frequently (3+ times/week)": 5
    },
    smoke: {
      "Never": 0,
      "Occasionally": 3,
      "Daily": 5
    },
    workTime: {
      "Less than 3 hours": 1,
      "3 to 5 hours": 2,
      "6 to 9 hours": 4,
      "10+ hours": 5
    },
    exercise: {
      "Rarely": 5,
      "1 -- 2 times/week": 3,
      "3 -- 5 times/week": 1,
      "Daily": 0
    }
  }

  const caculateAndSaveAssessmentResult = () => {
    const max_score = 5
    const max_total = Object.keys(userResponse).length * max_score

    let userScore = 0
    for (const answer in userResponse) {
      userScore += userResponse[answer]
    }

    const result = Math.round((userScore * 100) / max_total)
    console.log("result is ", result);

    manageServerCall('post', 'user/user-info/', {}, { result: result }, true)
      .then(res => {
        console.log(res)
        openModal(questionaireRef)
      })
      .catch(err => { alert("Something went wrong, please try again later") })


    //max_total == 100%
    //userScore == X
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    try {
      if (Object.keys(assessmentWeight).includes(name)) {
        setResponse(prev => ({ ...prev, [name]: assessmentWeight[name][value] }))
      }
    } catch (error) {
      console.log("SOmething went wrong, maybe question options has changed");
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData, " ", userResponse)
    caculateAndSaveAssessmentResult()
  }

  const nextQuestion = () => {
    index === 10 ? openModal(questionaireRef) :
      setIndex(prev => prev + 1)
  }

  const prevQuestion = () => {
    setIndex(
      prev => {
        if (prev === 1) {
          return 1
        } else {
          return prev - 1
        }

      })
  }


  return (
    <>
      <Layout image={Medic}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <button onClick={prevQuestion}>
              <IoIosArrowRoundBack />
              Back</button>
            <p><span>{index}</span> out of 10 questions</p>
            <button className={styles.closeBtn}>
              <IoClose />
            </button>
          </div>
          <div className={styles.parent}>

            <div className={styles.content}>
              <form className={styles.myForm}>
                {/* First questions */}

                {
                  index === 1 ? <>
                    <h1>Basic Questions</h1>

                    <h2>What is your age?</h2>

                    <div className={styles.options}>
                      <Option label='age' value="18-24" handleChange={handleChange} />
                      <Option label='age' value="25-30" handleChange={handleChange} />
                      <Option label='age' value="31-36" handleChange={handleChange} />
                      <Option label='age' value="37 or older" handleChange={handleChange} />
                    </div>
                  </> : null
                }

                {/* Second question */}
                {
                  index === 2 ?
                    <>
                      <h2>Where do you live ?</h2>
                      <input className={styles.input} type="text" placeholder="Enter your Location" name='location' onChange={handleChange} />
                    </>
                    : null
                }

                {/* Third question */}
                {
                  index === 3 ?
                    <>
                      <h2>Marital Status</h2>
                      <div className={styles.options}>
                        <Option label='maritalStatus' value="Single" handleChange={handleChange} />
                        <Option label='maritalStatus' value="Married" handleChange={handleChange} />
                        <Option label='maritalStatus' value="Divorced" handleChange={handleChange} />
                        <Option label='maritalStatus' value="Widowed" handleChange={handleChange} />
                        <Option label='maritalStatus' value="Rather not say" handleChange={handleChange} />
                      </div>

                    </>
                    : null
                }


                {/* Fourth question */}
                {
                  index === 4 ?
                    <>
                      <div>
                        <h2>Have you experienced any of the following childhood illnesses?
                        </h2>
                        <small>(Select all that apply)</small>
                      </div>
                      <div className={styles.options}>
                        <Option label='childhoodIllness' value="Chicken Pox" handleChange={handleChange} />
                        <Option label='childhoodIllness' value="Mumps" handleChange={handleChange} />
                        <Option label='childhoodIllness' value="Measles" handleChange={handleChange} />
                        <Option label='childhoodIllness' value="None" handleChange={handleChange} />
                      </div>

                    </>
                    : null
                }

                {/* Fifth question */}
                {
                  index === 5 ?
                    <>
                      <div>
                        <h2>Have you experienced any major physical trauma (e.g., accidents, sports injuries)?
                        </h2>

                      </div>
                      <div className={styles.options}>
                        <Option label='physicalTrauma' handleChange={handleChange} value="Yes" />
                        <Option label='physicalTrauma' handleChange={handleChange} value="No" />
                        <Option label='physicalTrauma' handleChange={handleChange} value="None" />
                      </div>

                    </>
                    : null
                }


                {/* Sixth question */}
                {
                  index === 6 ?
                    <>
                      <div>
                        <h2>How often do you consume Alcohol</h2>
                      </div>

                      <div className={styles.options}>
                        <Option label='consumeAlcohol' handleChange={handleChange} value="Never" />
                        <Option label='consumeAlcohol' handleChange={handleChange} value="Occasionally (1-2 times/month)" />
                        <Option label='consumeAlcohol' handleChange={handleChange} value="Weekly (1-2 times/week)" />
                        <Option label='consumeAlcohol' handleChange={handleChange} value="Frequently (3+ times/week)" />
                      </div>

                    </>
                    : null
                }


                {/* Seventh question */}
                {
                  index === 7 ?
                    <>
                      <div>
                        <h2>Do you smoke cigarettes or other substances?</h2>
                      </div>

                      <div className={styles.options}>
                        <Option label='smoke' handleChange={handleChange} value="Never" />
                        <Option label='smoke' handleChange={handleChange} value="Occasionally" />
                        <Option label='smoke' handleChange={handleChange} value="Daily" />
                      </div>

                    </>
                    : null
                }


                {/* Eight question */}
                {
                  index === 8 ?
                    <>
                      <div>
                        <h2>On average, how many hours do you sit per day (e.g, work/screen time)?</h2>
                      </div>

                      <div className={styles.options}>
                        <Option label='workTime' handleChange={handleChange} value="Less than 3 hours" />
                        <Option label='workTime' handleChange={handleChange} value="3 to 5 hours" />
                        <Option label='workTime' handleChange={handleChange} value="6 to 9 hours" />
                        <Option label='workTime' handleChange={handleChange} value="10+ hours" />
                      </div>

                    </>
                    : null
                }


                {/* Ninth question */}
                {
                  index === 9 ?
                    <>
                      <div>
                        <h2>How often do you engage in physical activity (e..g, walking, exercise)?</h2>
                      </div>
                      <div className={styles.options}>
                        <Option label='exercise' handleChange={handleChange} value="Rarely" />
                        <Option label='exercise' handleChange={handleChange} value="1 -- 2 times/week" />
                        <Option label='exercise' handleChange={handleChange} value="3 -- 5 times/week" />
                        <Option label='exercise' handleChange={handleChange} value="Daily" />
                      </div>

                    </>
                    : null
                }

                {/* tenth question */}
                {
                  index === 10 ?
                    <>
                      <div>
                        <h2>Are you currently trying to conceive?</h2>
                      </div>
                      <div className={styles.options}>
                        <Option label='conceive' handleChange={handleChange} value="Yes" />
                        <Option label='conceive' handleChange={handleChange} value="No" />
                        <Option label='conceive' handleChange={handleChange} value="Not yet, but planning to" />
                        <Option label='conceive' handleChange={handleChange} value="Prefer not to say" />
                      </div>

                    </>
                    : null
                }

                {
                  index === 10 ? <Button label="Submit" handleClick={handleSubmit} /> : null
                }


              </form>
              {
                index === 10 ? null : <Button label="Next Question" icon={<FaArrowRight />} handleClick={nextQuestion} />
              }
            </div>
          </div>
        </div>
      </Layout>
      {/* Complete questionnaire dialog */}

      <Dialog ref={questionaireRef}>
        <div className={styles.modal}>
          <IoMdCheckmark color='#56A3E6' size={100} />
          <div className={styles.salute}>
            <h2>Questionnaire completed</h2>
            <p>Thank you for taking the time to provide this information.</p>
          </div>
          <Button label="View Fertility Report"
            handleClick={() => {
              closeModal(questionaireRef)
              navigate("/")
            }}
          />
        </div>
      </Dialog>
    </>
  )
}
