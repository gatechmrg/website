import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const GreenPrimaryButton = styled(Button)(({theme}) => ({
    background: theme.palette.primary.main,
    color: '#fff',
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    transition: 'background 300ms',
    '&:hover': {
        background: theme.palette.primary.dark
    },
}))


export const BlueButton = styled(Button)(({ theme }) => ({
  minWidth: 200,
  color: '#fff',
  backgroundColor: '#003366', // Dark navy
  fontWeight: 'bold',
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  transition: 'background 300ms',

  '&:hover': {
    backgroundColor: '#0055aa',
  },
}));



