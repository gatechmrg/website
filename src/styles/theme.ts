import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
        main: '#00000'
    },
    background: {
      default: '#001848', // dark navy blue 
      paper: '#C2AC6D'    // Gold modal
    },
    text: {
          primary: '#ffffff', // white text on Gold
        // primary: '#00000'
    }
    },
    typography: {
        fontWeightRegular: 500, 
        allVariants: {
            fontWeight: 700 // default bold
        }
    }
})
