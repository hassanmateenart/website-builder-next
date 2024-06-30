import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import LeftNav from "../components/LeftNav";
import Header from "../components/Header";
import RightNav from "../components/RightNav";
import Board from "../components/Board";
import styles from "../app/style.module.css";
import axios from 'axios';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [templates, setTemplates] = useState([]);
    const [pageName, setPageName] = useState('');
    const editorRef = useRef(null);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const saveTemplate = async () => {
        if (editorRef.current && pageName.trim() !== '') {
            const editor = editorRef.current;
            const html = editor.getHtml();
            const css = editor.getCss();

            await axios.post('/api/save-template', { name: pageName, html, css });
            setPageName(''); // Reset the page name input after saving
            loadTemplates(); // Reload the templates to include the newly saved one
        } else {
            alert('Please enter a page name.');
        }
    };

    const loadTemplates = async () => {
        const response = await axios.get('/api/templates');
        setTemplates(response.data);
    };

    const loadTemplate = async (templateId) => {
        const response = await axios.get(`/api/template/${templateId}`);
        const { html, css } = response.data;

        if (editorRef.current) {
            const editor = editorRef.current;
            editor.setComponents(html);
            editor.setStyle(css);
        }
    };
    const downloadTemplate = () => {
        if (editorRef.current) {
            const editor = editorRef.current;
            const html = editor.getHtml();
            const css = editor.getCss();
            const blob = new Blob([`<style>${css}</style>${html}`], { type: 'text/html' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${pageName || 'template'}.html`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    useEffect(() => {
        loadTemplates();
    }, []);

    return (
        <>
            <Header onClick={toggleModal} onToggleDarkMode={toggleDarkMode} onSave={saveTemplate} onDownload={downloadTemplate} />
            <section className={styles['working-main-area']}>
                <LeftNav templates={templates} loadTemplate={loadTemplate} />
                <Board isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} editorRef={editorRef} />
                <RightNav />
                <div className={styles['save-container']}>
                    <input 
                        type="text" 
                        value={pageName} 
                        onChange={(e) => setPageName(e.target.value)} 
                        placeholder="Enter page name"
                    />
                    <button onClick={saveTemplate}>Save</button>
                </div>
            </section>
        </>
    );
}
