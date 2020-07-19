import ReactDOM from 'react-dom';
import './styles/index.sass';
import React, { Component } from 'react';
import ResponsiveDrawer from './components/Header';
import Jumbotron from './components/Jumbotron';
import About from './components/AboutMe'
import Splash from './components/Splash'
import Theme from './styles/theme'
import CursorText from './components/CursorText';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';
import PictureSeperator from './components/PictureSeperator';
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
          <About image={config.avatar} links={config.links}>
            {config.intro}
          </About>
          <Jumbotron id='skills' background='#5000ca'>
            <Skills skills={config.skills}/>
          </Jumbotron>
          <PictureSeperator top='#5000ca' bottom='#03ADC5' image='./landscape.jpg' />
          <div id='history' style={{background: '#03ADC5'}}>
            <Timeline events={config.events} />
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
