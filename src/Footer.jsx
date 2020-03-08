import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser'; 
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            '& *': {
                textAlign: 'center'
            }
        }
    }
}));

export default function Footer(props) {  
    const classes = useStyles();
    
    const links = props.links.map((obj) => {
        return (
            <Link href={obj.link}>
                <SvgIcon htmlColor='black' className={classes.icon}>
                    {ReactHtmlParser(obj.icon)}
                </SvgIcon>
            </Link>
        )
    });

    return (
        <Paper className={classes.root} >
            <div>{links}</div>
            <Typography variant="subtitle1">
                © {new Date().getFullYear()} Zak Dowsett, All Rights Reserved
            </Typography>
        </Paper>
    );
}