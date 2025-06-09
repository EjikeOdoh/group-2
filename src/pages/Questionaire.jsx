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



export default function Questionaire() {

  const navigate = useNavigate()
  const dispatch = useContext(AuthReducerContext)

  const questionaireRef = useRef(null)

  const [index, setIndex] = useState(1)
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    openModal(questionaireRef) 
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

  const getInfo = (formData) => {
    console.log(formData)
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
                        <Option label='physicalTrauma' value="Yes" />
                        <Option label='physicalTrauma' value="No" />
                        <Option label='physicalTrauma' value="None" />
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
                        <Option label='consumeAlcohol' value="Never" />
                        <Option label='consumeAlcohol' value="Occasionally (1-2 times/month)" />
                        <Option label='consumeAlcohol' value="Weekly (1-2 times/week)" />
                        <Option label='consumeAlcohol' value="Frequently (3+ times/week)" />
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
                        <Option label='smoke' value="Never" />
                        <Option label='smoke' value="Occasionally" />
                        <Option label='smoke' value="Daily" />
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
                        <Option label='workTime' value="Less than 3 hours" />
                        <Option label='workTime' value="3 to 5 hours" />
                        <Option label='workTime' value="6 to 9 hours" />
                        <Option label='workTime' value="10+ hours" />
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
                        <Option label='exercise' value="Rarely" />
                        <Option label='exercise' value="1 -- 2 times/week" />
                        <Option label='exercise' value="3 -- 5 times/week" />
                        <Option label='exercise' value="Daily" />
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
                        <Option label='conceive' value="Yes" />
                        <Option label='conceive' value="No" />
                        <Option label='conceive' value="Not yet, but planning to" />
                        <Option label='conceive' value="Prefer not to say" />
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
                                dispatch({
                                  type: true
                                })
                                closeModal(questionaireRef)
                                navigate("/report")
                              }}
                          />
                      </div>
                  </Dialog>
    </>
  )
}
