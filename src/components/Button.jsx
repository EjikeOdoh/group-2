import React from 'react'
import styles from '../styles/button.module.css'

export default function Button(props) {
  return (
    <button onClick={props.handleClick} className={styles.btn}>
        {props.label}
        {props.icon}
    </button>
  )
}
