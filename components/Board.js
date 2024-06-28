import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Widget from '../components/Widget'
import styles from "../app/style.module.css";
import grapesjs from 'grapesjs';

import plugin from 'grapesjs-preset-webpage';
import basic from 'grapesjs-blocks-basic';

import PageEditor from './PageEditor'; 

const Board = ({isModalOpen, closeModal}) => {
  const editorRef = useRef(null);
    useEffect(() => {
      const editor = grapesjs.init({
        container: '#scale_on',
        height: '800px',
        width: '100%',
        plugins: [plugin, basic],
        storageManager: {
            id: 'gjs-',
            type: 'remote',
            contentTypeJson: true,
            autosave: false, // Disable autosave
            autoload: true,
            storeComponents: true,
            storeStyles: true,
            storeHtml: true,
            storeCss: true,
            options: {
                remote: {
                    urlStore: `/save-template`,
                    // urlLoad: projectEndpoint,
                    // onStore: data => ({ id: primaryId, data }),
                    // onLoad: result => result,
                },
            },
            headers: {
                'Content-Type': 'application/json',
            },
        },
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
        pluginsOpts: {},
    });

    editorRef.current = editor;
      // const editor = grapesjs.init({
      //   // Indicate where to init the editor. You can also pass an HTMLElement
      //   container: '#scale_on',
      //   // Get the content for the canvas directly from the element
      //   // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      //   fromElement: true,
      //   // Size of the editor
      //   height: '90%',
      //   width: '100%',
      //   // Disable the storage manager for the moment
      //   storageManager: true,
      //   // Avoid any default panel
      //   panels: { defaults: [] },
      //   styleManager: {  },
      //   blockManager: {
      //     appendTo: '#widget',
      //     blocks: [
      //       {
      //         id: 'section', // id is mandatory
      //         label: '<b>Section</b>', // You can use HTML/SVG inside labels
      //         attributes: { class:'gjs-block-section' },
      //         content: `<section>
      //           <h1>This is a simple title</h1>
      //           <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
      //         </section>`,
      //       }, {
      //         id: 'text',
      //         label: 'Text',
      //         content: '<div data-gjs-type="text">Insert your text here</div>',
      //       }, {
      //         id: 'image',
      //         label: 'Image Ho',
      //         // Select the component once it's dropped
      //         select: true,
      //         // You can pass components as a JSON instead of a simple HTML string,
      //         // in this case we also use a defined component type `image`
      //         content: { type: 'image' },
      //         // This triggers `active` event on dropped components and the `image`
      //         // reacts by opening the AssetManager
      //         activate: true,
      //       }
      //     ]
      //   },
      // });
    });
  return (
    <div className={`${styles['working-preview']} position-relative`}>

        <Widget isOpen={isModalOpen} onClose={closeModal} />

        <div id='scale_on'>
        </div>
    </div>
  )
}

export default Board