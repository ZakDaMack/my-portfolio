import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link'; 

const useStyles = makeStyles(theme => ({
  title: {
    position: "absolute",
    fontWeight: "lighter",
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
  },
  appBar: {
    width: `100%`,
    letterSpacing: 1
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
            {['Home', 'About', 'Skills', 'History'].map((text, index) => (
              <Tab className={classes.tab} label={text} key={index} component={Link}
              to={'#' + text.toLowerCase().replace(' ', '-')} scroll={el => el.scrollIntoView({behavior: 'smooth'})}/>
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
  );
}


export default ResponsiveDrawer;
