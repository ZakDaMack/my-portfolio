import ReactDOM from 'react-dom';
import './index.sass';
import React, { Component } from 'react';
import ResponsiveDrawer from './Header.jsx';
import Jumbotron from './Jumbotron.jsx';
import About from './AboutMe'
import Theme from './styles/theme'
import CursorText from './CursorText';


class App extends Component {
  render() {
    return (
      <Theme>
        <Jumbotron>
          <div>
            <h1>Zak Dowsett</h1>
            <p>Computer Scientist // Software Engineer</p>
            <CursorText phrases={[
                "Computer Scientist",
                "Software Engineer",
                "Full-Stack Developer",
                "Blockchain Know-All"
              ]}/>
          </div>
        </Jumbotron>
        <ResponsiveDrawer/>
        <Jumbotron>
          <About imgsrc="">
          </About>
        </Jumbotron>

      </Theme>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
