import { Outlet, useNavigate } from 'react-router'
import SideBar from '../components/SideBar'
import styles from '../styles/protected.module.css'
import Dialog from '../components/Dialog'
import { useContext, useRef } from 'react'
import Button from '../components/Button'
import LightBtn from '../components/LightBtn'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Avatar from '../thumbnails/avatar.jpg'

import { getUserInfo } from '../api/utils'
import { useState, useEffect } from 'react'
import { AuthReducerContext } from '../context/AuthContext'
import { FaHamburger } from 'react-icons/fa'

import Logo from '../images/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export default function Protected() {

  const navigate = useNavigate()
  const dispatch = useContext(AuthReducerContext)

  const logOutRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const openModal = () => {
    logOutRef.current.showModal()
  }

  const cancelLogout = () => {
    logOutRef.current.close()
  }

  const [info, setUserInfo] = useState(0)

  useEffect(() => {
    getUserInfo()
      .then(res => {
        if (res.assessment === 0) {
          navigate("/questions")
        }
        setUserInfo(res)
        console.log(res);
      })
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen])


  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        <SideBar handleLogout={openModal} />
      </div>
      <div style={{ marginLeft: isOpen ? 0 : '-100%' }} className={styles.mobile}>
        <SideBar handleLogout={openModal} handleClick={toggleMenu} />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <p className={styles.salute}>Good morning, {info.first_name}</p>
          <div className={styles.btns}>
            <button onClick={() => navigate("/notifications")} className={styles.notify}>
              <IoMdNotificationsOutline size={32} />
            </button>
            <button className={styles.notify}>
              <img src={Avatar} />
            </button>
          </div>
        </div>
        <div className={styles.mobileHeader}>
          <div>
            <img src={Logo} />

          </div>
          <button onClick={toggleMenu}>
            {
              isOpen ? <IoClose size={32} /> :    <GiHamburgerMenu />
            }
          </button>
        </div>

        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>

      {/* Log out modal */}
      <Dialog ref={logOutRef}>
        <div className={styles.modal}>
          <div className={styles.texts}>
            <h3>Log Out</h3>
            <p>Are you sure you want to log out?</p>
          </div>

          <div className={styles.btns}>
            <Button label="Log out" handleClick={
              () => {
                cancelLogout()
                dispatch({
                  type: false,
                  token: null
                })
              }
            } />
            <LightBtn label="Cancel" handleClick={cancelLogout} />
          </div>
        </div>
      </Dialog>
    </div>
  )
}
