import logo from './logo.svg';
import './App.css';

import indigo from '@marerial-ui/core/colors/indigo';
import createMuiTheme from '@material-ui/core/styles/createMuiThme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    
    fontFamily: '"Comic Neue",cursive',
  },
});



function App() {
  return (
    <MuiThemeProvider theme={theme}>


    <NavBar />

    </MuiThemeProvider>
  );
}

export default App;
