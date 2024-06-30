import React, { useEffect } from 'react';
import styles from "../app/style.module.css";
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-webpage';
import basic from 'grapesjs-blocks-basic';

const Board = ({ isModalOpen, closeModal, editorRef }) => {
    useEffect(() => {
        const editor = grapesjs.init({
            container: '#scale_on',
            height: '800px',
            width: '100%',
            plugins: [plugin, basic],
            storageManager: false, // Disable storage manager, we'll handle it manually
            deviceManager: {
                devices: [
                    {
                        id: 'desktop',
                        name: 'Desktop',
                        width: '',
                    },
                    {
                        id: 'tablet',
                        name: 'Tablet',
                        width: '768px',
                        widthMedia: '992px',
                    },
                    {
                        id: 'mobilePortrait',
                        name: 'Mobile portrait',
                        width: '320px',
                        widthMedia: '575px',
                    },
                ],
            },
        });

        editorRef.current = editor;
    }, [editorRef]);

    return (
        <div className={`${styles['working-preview']} position-relative`}>
            <div id='scale_on'></div>
        </div>
    );
}

export default Board;
