import ReactDOM from 'react-dom';
import './index.sass';
import React, { Component } from 'react';
import ResponsiveDrawer from './Header';
import Jumbotron from './Jumbotron';
import About from './AboutMe'
import Splash from './Splash'
import Theme from './styles/theme'
import CursorText from './CursorText';
import ExternalLinks from './ExternalLinks';
import Skills from './Skills';
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
            {/* <About>
              Doggo ipsum extremely cuuuuuute borking doggo big ol fluffer dat tungg tho yapper, wow such tempt borkf much ruin diet borking doggo.
              Smol extremely cuuuuuute borking doggo boofers bork clouds, most angery pupper I have ever seen long woofer wow very biscit woofer.
              You are doin me a concern smol heck the neighborhood pupper very hand that feed shibe, wow very biscit sub woofer.
              Heckin good boys borkf maximum borkdrive big ol ur givin me a spook many pats extremely cuuuuuute, long water shoob super chub waggy wags boof.
              big ol pupper fluffer you are doing me the shock. Long bois shibe corgo fluffer aqua doggo mlem, thicc wrinkler pupper thicc. noodle horse lotsa pats.
              Fluffer heck blep you are doin me a concern adorable doggo smol, shooberino long bois tungg. Doing me a frighten what a nice floof lotsa pats pupperino, such treat.
            </About> */}
          </Splash>
          <Jumbotron id='skills' >
            <Skills skills={config.skills}/>
          </Jumbotron>
          <Jumbotron id='my-history' background='#03ADC5' />
          <Jumbotron background='url("/landscape.jpg")'>
            <ExternalLinks links={config.links} />
          </Jumbotron>
        </Theme>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
