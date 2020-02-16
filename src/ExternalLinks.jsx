import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import SvgIcon from '@material-ui/core/SvgIcon';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Link from '@material-ui/core/Link';
import ReactHtmlParser from 'react-html-parser'; 

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1em',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    '&:hover': {
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
      transform: 'scale(1.04)'
    }
  },
  title: {
    fontSize: '1em',
    textDecoration: 'none'
  },
  icon: {
    fontSize: '5em',
  },
  cardGroup: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default function ExternalLinks(props) {  
  
  const [visible, setVisible] = React.useState(false);
  const trigger = useScrollTrigger();
  if (trigger && !visible) {
    setVisible(trigger);
  }
  
  const classes = useStyles();

  const cards = props.links.map((obj, i) => {
    return (
      <Zoom in={visible} style={{transitionDelay: ((i + 4) * 250).toString() + 'ms'}} key={i}>
        <Link href={obj.link}>
          <Card className={classes.root}>
            <CardContent>
              <SvgIcon htmlColor={obj.colour} className={classes.icon}>
                {ReactHtmlParser(obj.icon)}
              </SvgIcon>
              <Typography variant="h5" component="h2" className={classes.title}>
                {obj.title}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Zoom>
    )
  })

  return (
    <div id='external-links' className={classes.cardGroup}>
      {cards}
    </div>
  );
}