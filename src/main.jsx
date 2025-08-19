import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import './styles/index.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// You don't need to import Typography here unless you use it in this file
// import Typography from '@mui/material/Typography';
import App from './App.jsx';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Helvetica',
    ].join(','),
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
