import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fafafa"
    },
    secondary: purple
  },
});

export default class Theme extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <CssBaseline />
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}
