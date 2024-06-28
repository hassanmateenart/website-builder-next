// components/PageEditor.js
import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';

import gjsPresetWebpage from 'grapesjs-preset-webpage';

const PageEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = grapesjs.init({
        container: editorRef.current,
        fromElement: true,
        width: 'auto',
        storageManager: false,
        plugins: [gjsPresetWebpage],
        pluginsOpts: {
          gjsPresetWebpage: {}
        },
        blockManager: {
          appendTo: '#blocks',
        },
        styleManager: {
          appendTo: '#styles',
          sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
          }, {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          }, {
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align'],
          }, {
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border', 'box-shadow', 'background'],
          }, {
            name: 'Extra',
            open: false,
            buildProps: ['opacity', 'transition', 'perspective', 'transform'],
          }]
        }
      });

      // Add custom blocks
      editor.BlockManager.add('custom-block', {
        label: 'Custom Block',
        content: '<div class="custom-block">This is a custom block</div>',
        category: 'Basic',
      });

      // Example of adding custom buttons
      editor.Panels.addButton('options', [{
        id: 'save',
        className: 'fa fa-save',
        command: 'save-db',
        attributes: { title: 'Save to DB' }
      }]);

      // Example of a custom command
      editor.Commands.add('save-db', {
        run(editor, sender) {
          sender && sender.set('active'); // turn off the button
          const html = editor.getHtml();
          const css = editor.getCss();
          console.log('HTML:', html);
          console.log('CSS:', css);
          alert('Content saved! Open the console to see the HTML and CSS.');
        }
      });

      // Download HTML and CSS
      document.getElementById('download-html').addEventListener('click', () => {
        const html = editor.getHtml();
        const css = editor.getCss();
        const blob = new Blob([`${html}<style>${css}</style>`], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'page.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  }, []);

  return (
    <div>
      <div id="editor-container">
        <div id="blocks"></div>
        <div ref={editorRef}></div>
        <div id="styles"></div>
      </div>
      <button id="download-html">Download HTML</button>
    </div>
  );
};

export default PageEditor;
