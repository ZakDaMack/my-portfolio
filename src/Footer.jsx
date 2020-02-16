import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    }
}));

export default function Footer() {  
    const classes = useStyles();
    
    return (
        <Paper className={classes.root} >
            <Box textAlign='right' >
                <Typography variant="subtitle2">
                    © {new Date().getFullYear()} Zak Dowsett All Rights Reserved
                </Typography>
            </Box>
        </Paper>
    );
}