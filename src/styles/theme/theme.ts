//import { createTheme } from '@material-ui/core/styles';

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: '#64ffda',
      main: '#64ffda',
      dark: '#64ffda',
      contrastText: '#112240',
    },
    secondary: {
      light: '#112240',
      main: '#112240',
      dark: '#112240',
      contrastText: '#64ffda',
    },
    success: {
      light: '#0fb97a',
      main: '#0ea06b',
      dark: '#096d48',
      contrastText: '#ccd6f6',
    },
    error: {
      light: '#ff4d40',
      main: '#e53a3a',
      dark: '#cc3d33',
      contrastText: '#ccd6f6',
    },
    text: {
      primary: '#64ffda',
      secondary: '#ccd6f6',
    }, 



  },
  spacing: 6,
});

export const themeLight = createTheme({
  palette: {
    primary: {
      light: '#0a192f',
      main: '#0a192f',
      dark: '#0a192f',
      contrastText: '#c2c6c9',
    },
    secondary: {
      light: '#c2c6c9',
      main: '#c2c6c9',
      dark: '#c2c6c9',
      contrastText: '#0a192f',
    },
    success: {
      light: '#0fb97a',
      main: '#0ea06b',
      dark: '#096d48',
      contrastText: '#ccd6f6',
    },
    error: {
      light: '#ff4d40',
      main: '#e53a3a',
      dark: '#cc3d33',
      contrastText: '#ccd6f6',
    },
    text: {
      primary: '#000',
      secondary: '#0a192f',
    }, 



  },
  spacing: 6,
});


