import './App.css';
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Create a custom theme with the web3 color palette
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7E57C2',
      light: '#9C27B0',
      dark: '#5E35B1',
    },
    background: {
      default: '#120327',
      paper: 'rgba(30, 5, 56, 0.6)',
    },
    text: {
      primary: '#E0D7F6',
      secondary: '#BBA9E1',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #120327 0%, #1E0538 50%, #2A0C4E 100%)',
        overflow: 'hidden',
      }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <MainPage/>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
