import React from 'react'
import styles from '../styles/layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.container}>
            <div>
                <img src={props.image} />
            </div>
            <div>{props.children}</div>
        </div>
    )
}
