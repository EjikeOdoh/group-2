import styles from '../styles/lightBtn.module.css'

export default function LightBtn({ label, icon, handleClick, loading }) {
  return (
    <button
      onClick={handleClick}
      className={styles.btn}
      disabled={loading}
    >
      {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        <>
          {label} {icon}
        </>
      )}
    </button>
  )
}
