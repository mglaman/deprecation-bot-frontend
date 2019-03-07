import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default () => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="h5" color={`inherit`}>#d9readiness</Typography>
        </Toolbar>
    </AppBar>
)
