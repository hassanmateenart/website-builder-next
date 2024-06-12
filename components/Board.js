import React from 'react'
import { useState } from 'react';
import Widget from '../components/Widget'
import styles from "../app/style.module.css";

const Board = ({isModalOpen, closeModal}) => {
    
  return (
    <div className={`${styles['working-preview']} position-relative`}>

        <Widget isOpen={isModalOpen} onClose={closeModal} />

        <div id='scale_on'>
        </div>
    </div>
  )
}

export default Board