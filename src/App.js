import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MyRoutes from './MyRoutes';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#f48fb1',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MyRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
