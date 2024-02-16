import { createTheme } from '@mui/material/styles'
import palette from './palette'

export default createTheme({
    palette: {
        primary: {
            main: palette.fg1
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            }
        },
        MuiBottomNavigation: {
            defaultProps: {
                sx: {
                    backgroundColor: palette.fg1,
                    height: '70px',
                }
            }
        }
    },
})