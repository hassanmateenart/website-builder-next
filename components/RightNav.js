import React from 'react'
import styles from "../app/style.module.css";

const RightNav = () => {
  return (
    <div className={styles['design-property']} id='left_section'>
        <div className={styles['publish-design']}>
            <p>Design</p>
            <button>Publish</button>
        </div>
        <div className={styles['selct-item-property']}>
            <p>Pages</p>
            <div className={styles['item-properties']}>
                <div className={styles['color-and-size']}>
                    <div className={styles['color-item']}>
                        <img src="Assets/Icons/BlackBox.svg" alt="" />
                        <p>000000</p>
                    </div>
                    <p>100%</p>
                </div>
                <img src="Assets/Icons/show-hide.svg" alt="show-hide toggle Button" />
            </div>
        </div>
        <div className={styles['export-layer']}>
            <p>Export</p>
            <img src="Assets/Icons/ExportIcon.svg" alt="Export Your Layer" />
        </div>
    </div>
  )
}

export default RightNav