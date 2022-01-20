import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import FormScreen from "./components/formScreen";
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}><FormScreen/></ThemeProvider>
  )
}

export default App;
