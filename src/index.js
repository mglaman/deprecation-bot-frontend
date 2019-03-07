import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './utils/theme';
import AppBar from './components/appBar';
import Core from './pages/Core';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar />
        <Core />
    </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
