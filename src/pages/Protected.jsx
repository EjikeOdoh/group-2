import { Outlet } from 'react-router'
import SideBar from '../components/SideBar'
import styles from '../styles/protected.module.css'
import Dialog from '../components/Dialog'
import { useRef } from 'react'
import Button from '../components/Button'
import LightBtn from '../components/LightBtn'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Avatar from '../thumbnails/avatar.jpg'

export default function Protected() {

  const logOutRef = useRef(null)

  const openModal = () => {
    logOutRef.current.showModal()
  }

  const cancelLogout =() => {
    logOutRef.current.close()
  }

  return (
    <div className={styles.container}>
      <SideBar handleLogout={openModal} />
      <div className={styles.content}>
        <div className={styles.top}>
          <p className={styles.salute}>Good morning, Temi</p>
          <div className={styles.btns}>
            <button className={styles.notify}>
              <IoMdNotificationsOutline size={32} />
            </button>
            <button className={styles.notify}>
              <img src={Avatar} />
            </button>
          </div>
        </div>

        <div style={{paddingTop: "100px", paddingInline: "24px"}}>
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
                <Button label="Log out" />
                <LightBtn label="Cancel" handleClick={cancelLogout} />
              </div>
          </div>
      </Dialog>
    </div>
  )
}
