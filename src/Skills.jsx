import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import SvgIcon from '@material-ui/core/SvgIcon';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Rating from '@material-ui/lab/Rating';
import { CardHeader, Avatar, Divider, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      width: 400,
      margin: '1em',
      overflow: 'revert'
    },
    cardGroup: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    sensorHolder: {
      minHeight: '1em',
      minWidth: '1em'
    },
    title: {
      fontSize: '1em',
      textDecoration: 'none'
    },
    icon: {
      fontSize: '5em'
    },
    header: {
      width: 400,
      height: 200,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    }
  }));

function CustomHeader(props) {
  const classes = useStyles();

  return (
    <CardHeader
      className={classes.header}
      style={{
        background: 'url("' + props.img + '")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    />
  );
}

  

export default function Skills(props) {  
  const [visible, setVisible] = React.useState(false);
  const trigger = useScrollTrigger();
  if (trigger && !visible) {
    setVisible(trigger);
  }

  const classes = useStyles();
  const cards = props.skills.map((obj, i) => {
    return (
      <Grow in={visible} style={{transitionDelay: '250ms'}} key={i}>
        <Card className={classes.root}>
          <CustomHeader img={obj.img}/>
          <CardContent>
            <Box textAlign='center'>
              <Typography variant='title' gutterBottom>{obj.title}</Typography>
              <Typography variant='body1' paragraph>{obj.main}</Typography>
            </Box>
            <Divider />
            <Rating value={obj.rating} readonly />
          </CardContent>
        </Card>
      </Grow>
    );
  });

  return (
    <div className={classes.cardGroup}>
      {cards}
    </div>
  )
}