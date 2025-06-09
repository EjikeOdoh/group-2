import styles from '../styles/dialog.module.css'

export default function Dialog(props) {

    return (
        <dialog className={styles.dialog} ref={props.ref}>
            <div className={styles.content}>
                {props.children}
            </div>
        </dialog>
    )
}
