import React from 'react'
import styles from '../styles/option.module.css'

export default function Option(props) {
  return (
    <div className={styles.option}>
        <label>{props.value}</label>
        <input type='radio' name={props.label} />
    </div>
  )
}
