import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
export default createMuiTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        useNextVariants: true,
    },
});
