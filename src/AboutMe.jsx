import React from 'react';
import {useSpring, animated} from 'react-spring'
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import ReactHtmlParser from 'react-html-parser'; 
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    merge: {
        position: 'absolute',
        display: 'block',
        // top: -150,
        // height: 150,
        width: '100%',
        background: 'linear-gradient(transparent, rgb(34,195,145))'
        // 2s cubic-bezier(.17,.67,.83,.67)
    },
    root: {
        padding: theme.spacing(3, 2),
        width: '100%',
        display: 'flex',
        background: 'rgb(34,195,145)',
        paddingTop: '10em',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    text: {
        maxWidth: '80em',
        textAlign: 'center',
        margin: '0 auto',
        padding: '1em'
    },
    avatarContainer: {
        flexGrow: 1
    },
    secondContainer: {
        flexGrow: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'middle'
    },
    avatar: {
        width: '15em',
        height: '15em',
        margin: '0 auto'
    },
    icon: {
        margin: '0.50em'
    },
    links: {
        margin: '1em 20%',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        '& a svg': {
            fontSize: '5em',
            '&:hover': {
                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                transform: 'scale(1.04)'
            }
        }
    },
    waves: {
        background: '#5000ca',
        display: 'block'
    }
  }));

  

export default function About(props) {
    const classes = useStyles();
    const animation = useSpring({
        to: {
            height: 250,
            top: -250
        },   
        from: {
            height: 150,
            top: -150
        },
        //reset: true,
        reverse: true
    });

    const links = props.links.map((obj, i) => {
        return (
            <Link href={obj.link}>
                <SvgIcon htmlColor={obj.colour} className={classes.icon}>
                    {ReactHtmlParser(obj.icon)}
                </SvgIcon>
            </Link>
        )
    });

    return (
        <div id='about' style={{position: 'relative'}}>
            <animated.div style={animation} className={classes.merge}></animated.div>
            <div className={classes.root}>
                <div className={classes.avatarContainer}>
                    <Avatar className={classes.avatar}>ZD</Avatar>
                </div>
                <div className={classes.secondContainer}>
                    <Typography className={classes.text} variant="body1" color="primary">
                        {props.children}
                    </Typography>
                    <div className={classes.links}>
                        {links}
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={classes.waves}>
                <path fill="rgb(34,195,145)" fill-opacity="1" d="M0,96L26.7,122.7C53.3,149,107,203,160,192C213.3,181,267,107,320,85.3C373.3,64,427,96,480,138.7C533.3,181,587,235,640,261.3C693.3,288,747,288,800,256C853.3,224,907,160,960,154.7C1013.3,149,1067,203,1120,213.3C1173.3,224,1227,192,1280,197.3C1333.3,203,1387,245,1413,266.7L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>]
            </svg>
        </div>
    );
}

