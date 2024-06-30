import React from 'react';
import styles from "../app/style.module.css";

const LeftNav = ({ templates, loadTemplate }) => {
  return (
    <div className={styles['layer-section']}>
        <div className={styles['Working-layers']}>
            <p>Pages</p>
            <ul className={styles['layer-name']}>
                {templates.map(template => (
                    <li 
                        key={template.id} 
                        className={styles['layers-names-inner']} 
                        onClick={() => loadTemplate(template.id)}
                    >
                       - {template.page_name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default LeftNav;
