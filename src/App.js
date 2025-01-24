import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import Benefits from './sections/Benefits';
import Industries from './sections/Industries';
import Features from './sections/Features';
import Contact from './sections/Contact';
import Reviews from './sections/Reviews';

const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = {
    ...theme,
    colors: theme[isDarkMode ? 'dark' : 'light'].colors
  };

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Navbar />
      <main>
        <Home />
        <Benefits />
        <Industries />
        <Features />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </StyledThemeProvider>
  );
};

function App() {
  // Scroll to top when page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CustomThemeProvider>
      <ThemedApp />
    </CustomThemeProvider>
  );
}

export default App; 