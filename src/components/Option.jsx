import React from 'react'
import styles from '../styles/option.module.css'

export default function Option(props) {
  return (
    <div className={styles.option}>
        <label htmlFor={props.value}>{props.value}</label>
        <input type='radio' name={props.label} id={props.value} value={props.value} onChange={props.handleChange} />
    </div>
  )
}
