import React, { useState } from 'react';
import Meta from './Meta'
import Header from './Header'
import styles from '../app/style.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <div className={styles.container}> */}
        {/* <main className={styles.main}> */}
          {children}
        {/* </main> */}
      {/* </div> */}
    </>
  )
}

export default Layout