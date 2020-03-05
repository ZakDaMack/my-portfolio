import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Timeline.sass';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div className="root">
        <div className="timeline">

          <div className="container left">
            <div className="content">
              <Typography variant='h3' color="textSecondary">2016</Typography>
              <Typography variant='body' color="textSecondary" paragraph>Lorem ipsum..</Typography>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <Typography variant='h3' color="textSecondary">Transalis</Typography>
              <Typography variant='title' color="textSecondary">2019 - 2020</Typography>
              <Typography variant='body1' color="textSecondary" paragraph>Lorem ipsum..</Typography>
            </div>
          </div>

        </div> 

      </div>
    );
  }
}
    
export default Timeline;

