import Switch from './Switch'
import styles from '../app/style.module.css';



const Header = ({ onClick, onToggleDarkMode }) => {
  return (
    <header className={styles.header}>
        <div className={`${styles['main-header']} ${styles['sec-space']}`}>
            <div className={styles['control-section']}>
                <ul className={styles['controls-menu']}>
                    <li className={styles['control-icon-list']}>
                        <img src="Assets/Icons/return-icon.svg" alt="control-icon" />
                    </li>
                    <li className={styles['control-icon-list']}>
                        <img src="Assets/Icons/arrowicon.svg" alt="control-icon" />
                    </li>
                    <li className={styles['control-icon-list']}>
                        <img src="Assets/Icons/hand-icon.svg" alt="control-icon" />
                    </li>
                    <li className={styles['control-icon-list']}>
                        <img src="Assets/Icons/pen-tool-svgrepo-com.svg" alt="control-icon" />
                    </li>
                    <li className={styles['control-icon-list']} onClick={onClick}>
                        <img src="Assets/Icons/widgets.svg" alt="control-icon" />
                    </li>
                </ul>
            </div>
            <div className={styles['file-name']}>
                <p>Website </p>
            </div>
            <div className={styles['control-right']}>
                <button>Share</button>
                <img src="Assets/Icons/preview-icon.svg" alt="Preview Project" />
                <img src="Assets/Icons/screensize.svg" alt="Change screensize" />
                <Switch onChange={onToggleDarkMode} />
            </div>
        </div>
    </header>
  )
}

export default Header