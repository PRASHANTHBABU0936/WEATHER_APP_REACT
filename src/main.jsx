import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './App.css'

// ✅ Import MUI Theme utilities
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

// ✅ Create a custom theme (optional)
const theme = createTheme({
  palette: {
    mode: 'light', // you can also use 'dark'
    primary: {
      main: '#1976d2', // default MUI blue
    },
    secondary: {
      main: '#ff9800', // orange
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ Wrap your entire app in MUI’s ThemeProvider */}
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* resets CSS for consistent look across browsers */}
      <App />
    </ThemeProvider>
  </StrictMode>
)
