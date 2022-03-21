import {createTheme} from '@mui/material/styles';

export const myTheme = createTheme({
    palette: {
        primary: {
            light: '#428e92',
            main: '#006064',
            dark: '#00363a',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#ffb04c',
            main: '#f57f17',
            dark: '#bc5100',
            contrastText: '#fffde7',
        },
        background: {
            default: '#fafafa'
        }
    },
});