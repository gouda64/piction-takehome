import './App.css';
import {createTheme, ScopedCssBaseline, ThemeProvider} from "@mui/material";
import CustomRoutes from "./CustomRoutes";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: "lightgray",
          padding: "0.5rem 1rem",
          borderRadius: "0.75rem",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "#0075FF",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0075FF",
            borderWidth: "1px",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#484848',
    },
    piction: {
      background: '#eaeaea',
      text: '#6c6c72',
      white: '#fff',
    },
    grayTones: {
      main: '#636363',
      light: '#eeeeee',
      lighter: '#f5f5f5',
      ultralight: '#fafafa',
    },
  },
  spacing: 8,
});


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
          <ScopedCssBaseline>
            <CustomRoutes />
          </ScopedCssBaseline>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
