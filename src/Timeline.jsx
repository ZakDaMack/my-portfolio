import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Timeline.sass';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div className="timeline">

        <div className="container left">
          <div className="content">
            <Typography variant='h2'>2016</Typography>
            <Typography variant='subtitle1' paragraph>Lorem ipsum..</Typography>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <Typography variant='h2'>2016</Typography>
            <Typography variant='subtitle1' paragraph>Lorem ipsum..</Typography>
          </div>
        </div>

      </div> 
    );
  }
}
    
export default Timeline;

