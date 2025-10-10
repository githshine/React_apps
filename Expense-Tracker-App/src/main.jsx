import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App.jsx';
import theme from './theme.js';
import GlobalState from './components/context/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalState>
  </StrictMode>
);
