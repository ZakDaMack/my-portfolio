import ReactDOM from 'react-dom';
import './index.sass';
import React, { Component } from 'react';
import ResponsiveDrawer from './Header';
import Jumbotron from './Jumbotron';
import About from './AboutMe'
import Splash from './Splash'
import Theme from './styles/theme'
import CursorText from './CursorText';
import Timeline from './Timeline';
import Skills from './Skills';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

import config from './config.json';

class App extends Component {
  render() {
    return (
      <Router>
        <Theme>
          <ResponsiveDrawer/>
          <Splash>
            <div>
              <h1>Zak Dowsett</h1>
              <p>
                <CursorText phrases={config.cursorTextPhrases}/>
              </p>
            </div>
          </Splash>       
          <About links={config.links}>
            {config.intro}
          </About>
          <Jumbotron id='skills' background='#5000ca'>
            <Skills skills={config.skills}/>
          </Jumbotron>
          <div id='my-history' style={{background: '#03ADC5'}}>
            <Timeline />
          </div>
          <Footer links={config.links}/>
        </Theme>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
