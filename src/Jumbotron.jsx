import React from 'react';
import './Jumbotron.sass';
import Particles from 'react-particles-js';

class Jumbotron extends React.Component {
render() {
return (
    <div className="jumbotron">
        <Particles style={{position: 'absolute', height: '100%', width: '100%', top: 0, left: 0}}/>
        {this.props.children}
    </div>
);
}
}

export default Jumbotron;