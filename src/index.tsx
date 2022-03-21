import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./app/store";
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import {myTheme} from "./components/Theme";


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={myTheme}>
        <App />
        </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

