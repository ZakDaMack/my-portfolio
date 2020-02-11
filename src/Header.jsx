import React, { useRef, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    position: "absolute",
    fontWeight: "lighter",
    [theme.breakpoints.down('sm')]: {
      width: `0`,
    },
  },
  appBar: {
    [theme.breakpoints.up('xs')]: {
      width: `100%`,
    },
    letterSpacing: '1px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  tabbar: {
    flexGrow: 1,
  },
  active: {
    color: 'white',
    background: 'transparent'
  }
}));


function ResponsiveDrawer(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h5" noWrap>
            Zak Dowsett
          </Typography>
          <Tabs 
          className={classes.tabbar}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          value={value}
          centered>
            {['About Me', 'Resume', 'Portfolio', 'Links'].map((text, index) => (
              <Tab className={classes.tab} label={text} key={index}/>
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
  );
}


export default ResponsiveDrawer;
