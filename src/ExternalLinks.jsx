import React from 'react';
import ReactDOM from "react-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import SvgIcon from '@material-ui/core/SvgIcon';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: '1em'
    },
    cardGroup: {
      display: 'flex',
      flexDirection: 'row'
    },
    sensorHolder: {
      minHeight: '1em',
      minWidth: '1em'
    },
    title: {
      fontSize: 14,
    },
    icon: {
      fontSize: '5em'
    },
    pos: {
      marginBottom: 12,
    },
  });

  

export default function ExternalLinks(props) {  
  const [visible, setVisible] = React.useState(false);

  
  const trigger = useScrollTrigger();
  
      const classes = useStyles();
      const cards = props.links.map((obj, i) => {
        return (
          <Zoom in={trigger} style={{transitionDelay: ((i+ 1) * 250).toString() + 'ms'}} key={i}>
            <a href={obj.link}>
              <Card className={classes.root}>
                <CardContent>
                  <SvgIcon htmlColor={obj.colour} className={classes.icon}>
                    {obj.icon}
                  </SvgIcon>
                  <Typography variant="h5" component="h2">
                    {obj.title}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Zoom>
          
        );
      });



      // return (
        
      //   <div className={classes.sensorHolder}>
      //     <VisibilitySensor delayedCall scrollCheck>
      //       {({isVisible}) => {
      //         console.log(isVisible);
              
      //         if (isVisible)
      //         return (
      //           <div className={classes.cardGroup}>
      //             {cards}
      //           </div>
      //         )
              
      //         else
      //         return (
      //           <div className={classes.cardGroup}>
      //           </div>
      //         )
      //       } 
      //       }
      //     </VisibilitySensor>
      //   </div>
      
      // );

      return (
        <div className={classes.cardGroup}>
          {cards}
       </div>
      )
      }