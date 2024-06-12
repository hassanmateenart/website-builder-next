import React from 'react'
import styles from "../app/style.module.css";

const LeftNav = () => {
  return (
    <div className={styles['layer-section']}>
        <div className={styles['search-layer']}>
            <img src="Assets/Icons/SearchIcon.svg" alt="Search Your Layer" />
            <p>Layers</p>
        </div>
        <div className={styles['Working-layers']}>
            <p>Pages</p>
            <ul className={styles['layer-name']}>
                <li className={styles['layers-names-inner']}>- Page 1</li>
                <li className={styles['layers-names-inner']}>- Page 2</li>
            </ul>
        </div>
    </div>
  )
}

export default LeftNav