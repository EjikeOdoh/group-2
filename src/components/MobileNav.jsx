import { MdClose, MdMenu } from 'react-icons/md'
import styles from '../styles/mobileNav.module.css'
import { Link } from 'react-router'

export default function MobileNav(props) {
  return (
    <nav className={styles.mobileNav}>
      <button onClick={props.handleClose} className={styles.menuBtn}>
        <MdClose size={24} />
      </button>

      <ul className={styles.menu}>
        <li><a onClick={props.handleClose}>Home</a></li>
        <li><a href="#features" onClick={props.handleClose}>Features</a></li>
        <li><a onClick={props.handleClose}>About us</a></li>
        <li><a href="#faq" onClick={props.handleClose}>FAQ</a></li>
        <li><Link to="/login" onClick={props.handleClose}>Sign In</Link></li>
        <li><Link to="/register">Sign Up</Link></li>
      </ul>
    </nav>
  )
}
