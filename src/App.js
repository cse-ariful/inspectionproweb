import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import Features from './sections/Features';
import Benefits from './sections/Benefits';
import Industries from './sections/Industries';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  // Scroll to top when page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main>
        <Home />
        <Features />
        <Benefits />
        <Industries />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App; 