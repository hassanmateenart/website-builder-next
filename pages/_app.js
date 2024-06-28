// pages/_app.js
import Layout from '../components/Layout'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../app/globals.css';
import '../app/grape.module.css';
import 'grapesjs/dist/css/grapes.min.css';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log('Dark mode toggled');
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return(
    <Layout onToggleDarkMode={onToggleDarkMode}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;