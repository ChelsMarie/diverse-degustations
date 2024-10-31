import React, { useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Eating from './pages/Eating/Eating';
import Wearing from './pages/Wearing/Wearing';
import Links from './pages/Links/Links';
import PageNotFound from './pages/PageNotFound';
import NavBar from './pages/Navbar/NavBar';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { components, dark, light, typography } from './theme/theme';
import About from './pages/About/About';

function App() {
  const theme: Theme = useMemo(
    () =>
      createTheme({
        cssVariables: {
          colorSchemeSelector: 'data'
        },
        colorSchemes: {
          light: light,
          dark: dark
        },
        typography: typography,
        components: components
      }),
    []
  );


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eating" element={<Eating />} />
            <Route path="/wearing" element={<Wearing />} />
            <Route path="/links" element={<Links />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </Router>


      </ThemeProvider>
    </>
  );
}

export default App;
