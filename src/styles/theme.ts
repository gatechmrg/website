import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsl(166, 100%, 35%)'
        },
        background: {
            default: 'hsl(166, 98%, 98%)',
            paper: '#fff'
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',  // allow multi-line wrapping
                },
            },
        },
    },
})