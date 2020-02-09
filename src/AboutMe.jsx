import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    bigAvatar: {
      margin: 10,
      width: 150,
      height: 150
    }, 
    root: {
        padding: theme.spacing(3, 2),
        maxWidth: '80em',
        width: '90%'
    },
  });

class About extends React.Component {
render() {
const { classes } = this.props;
return (
    <Paper className={classes.root}>
        <Avatar alt="Zak Dowsett" variant="circle" src={this.props.imgsrc} className={classes.bigAvatar} >ZD</Avatar>
        <Typography variant="subtitle1">
            {this.props.children}
        </Typography>
    </Paper>    
);
}
}

export default withStyles(style)(About);