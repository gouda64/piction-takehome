import './App.css';
import {createTheme, ScopedCssBaseline, ThemeProvider} from "@mui/material";
import CustomRoutes from "./CustomRoutes";

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
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <CustomRoutes />
        </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
