import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import GitHubIcon from '@material-ui/icons/GitHub';

const style = theme => ({
    root: {
      minWidth: 275,
      margin: '1em'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


class ExternalLinks extends React.Component {
  
    render() {
      const { classes } = this.props;
      const cards = this.props.links.map((obj, i) => {
        return (
          <Zoom in='true' style={{transitionDelay: (i * 500).toString() + 'ms'}}>
            <a href={obj.link}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {obj.title}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Zoom>
          
        );
      });

      return (
        <div>
          {cards}
        </div>
      );

      // return (
      //   <div>
      //     {links.map((obj, index) => (
      //     <Card className={classes.root}>
      //       <CardContent>
      //         <Typography variant="h5" component="h2">
      //           {obj.title}
      //         </Typography>
      //       </CardContent>
      //     </Card>
      //   ))}
      //   </div>
      // );
    }
  }

  export default withStyles(style)(ExternalLinks);