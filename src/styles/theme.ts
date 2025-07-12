import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
  palette: {
    primary: {
      // main: 'hsl(166, 100%, 35%)'
      main: '#C2AC6D' // Gold (lines, hyperlinks, hover)
    },
    // secondary: {
    //   main: '#1a0dab' // Dark navy blue
    // },
    background: {
      // default: '#001848', // dark navy blue 
      default: '#003566', // Midnight blue
      paper: '#C2AC6D'    // Gold modal
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#000000', // Black
    }
  },
  typography: {
    fontWeightRegular: 450,
    fontWeightMedium: 600,
    fontWeightLight: 400, // h1
    h2: {
      fontWeight: 400
    },
    h7: {
      fontWeight: 300
    }
  }
})

