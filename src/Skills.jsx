import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
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
    pos: {
      marginBottom: 12,
    },
    header: {
      // background: 'url("javaimage.png")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: 400,
      height: 200
    }
  }));

function CustomHeader(props) {
  const classes = useStyles();

  return (
    <CardHeader className={classes.header}
      classes={{
        root: {
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          background: 'url("' + props.img + '")'
        }
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
      <Slide in={trigger} style={{transitionDelay: '250ms'}} direction='up' key={i}>
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
      </Slide>
    );
  });

  return (
    <div id='skills' className={classes.cardGroup}>
      {cards}
    </div>
  )
}