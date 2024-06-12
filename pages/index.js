import { useState, useEffect } from 'react';
import Image from "next/image";
import LeftNav from "../components/LeftNav"
import Header from "../components/Header"
import RightNav from "../components/RightNav"
import Board from "../components/Board"
import styles from "../app/style.module.css";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };
    const toggleDarkMode = () => {
        console.log('Toggle Dark Mode called');
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        console.log('jadkjaajsdkjasdkjask', isDarkMode)
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);


  return (
    <>
        <Header onClick={toggleModal} onToggleDarkMode={toggleDarkMode} />
        <section className={styles['working-main-area']}>
            <LeftNav/>
            <Board isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
            <RightNav/>
        </section>
    </>
  );
}
