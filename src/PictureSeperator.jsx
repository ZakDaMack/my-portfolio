import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    svg: {
        display: 'block'
    },
    pic: {
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    }
}));

export default function PictureSeperator(props) {
    const classes = useStyles();

    return (
        <div className={classes.pic} style={{backgroundImage: 'url(' + props.image + ')'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={classes.svg}>
                <path fill={props.top} fill-opacity="1" d="M0,96L1440,128L1440,0L0,0Z"></path>
            </svg>
    
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={classes.svg}>
                <path fill={props.bottom} fill-opacity="1" d="M0,128L1440,288L1440,320L0,320Z"></path>
            </svg>
        </div>
    );
}

