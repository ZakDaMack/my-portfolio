import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    root: {
        position: "absolute",
        bottom: 0,
        padding: theme.spacing(3, 2),
        width: '100%'
    },
    text: {
        maxWidth: '80em',
        textAlign: 'center'
    }
  });

class About extends React.Component {
render() {
const { classes } = this.props;
return (

    <Paper className={classes.root} square>
        <Typography className={classes.text} variant="subtitle1">
            {this.props.children}
        </Typography>
    </Paper>
);
}
}

export default withStyles(style)(About);