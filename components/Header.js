import Switch from './Switch';
import styles from '../app/style.module.css';

const Header = ({ onClick, onToggleDarkMode, onSave, onDownload }) => {
  return (
    <header className={styles.header}>
        <div className={`${styles['main-header']} ${styles['sec-space']}`}>
            <div className={styles['control-section']}>
                <ul className={styles['controls-menu']}>
                    <li className={styles['control-icon-list']}>
                        <a href='#' onClick={onClick}>New</a>
                    </li>
                    <li className={styles['control-icon-list']}>
                        <button onClick={onSave}>Save</button>
                    </li>
                    <li className={styles['control-icon-list']}>
                        <button onClick={onDownload}>Download</button>
                    </li>
                    {/* other control icons */}
                </ul>
            </div>
            <div className={styles['file-name']}>
                <p>Website</p>
            </div>
            <div className={styles['control-right']}>
                <Switch onChange={onToggleDarkMode} />
            </div>
        </div>
    </header>
  );
}

export default Header;
