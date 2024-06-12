import React, { useEffect, useState } from 'react';
import styles from "../app/style.module.css";

const Widget = ({ isOpen, onClose }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const darkModeClass = document.body.classList.contains('dark-mode');
        setIsDarkMode(darkModeClass);
    }, []);

    if (!isOpen) return null;

  return (
        <div className={`${styles['widget-block']} ${isDarkMode ? 'dark-mode' : ''} position-absolute`}>
            <div className={styles['widget-area']}>
                <p>Widget</p>
                <img src="Assets/Icons/Arrow Right.svg" alt="Arrow Right" />
            </div>
            <div className={styles['search-bar']}>
                <input type="email" label="Email" placeholder="Search" />
                <img src="Assets/Icons/SearchIcon.svg" alt="Search Icon" />
            </div>
            <div className={styles['widget-grid']}>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/Text-Widget.svg" alt="Icon Image" />
                    <p>H1</p>
                </div>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/Text-Widget.svg" alt="Icon Image" />
                    <p>H2</p>
                </div>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/Text-Widget.svg" alt="Icon Image" />
                    <p>H3</p>
                </div>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/Text-Widget.svg" alt="Icon Image" />
                    <p>H4</p>
                </div>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/Text-Widget.svg" alt="Icon Image" />
                    <p>H5</p>
                </div>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/Text-Widget.svg" alt="Icon Image" />
                    <p>H6</p>
                </div>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/rectangle (1).svg" alt="Icon Image" />
                    <p>Rectangular</p>
                </div>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/image-gallery (1).svg" alt="Icon Image" />
                    <p>Image</p>
                </div>
                <div className={styles['widget-list']}>
                    <img src="Assets/Icons/button-svgrepo-com (1).svg" alt="Icon Image" />
                    <p>Button</p>
                </div>
            </div>
        </div>
  );
};

export default Widget;