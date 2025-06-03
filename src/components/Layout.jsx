import React from 'react'
import styles from '../styles/layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={props.image} />
            </div>
            <div className={styles.right}>{props.children}</div>
        </div>
    )
}
