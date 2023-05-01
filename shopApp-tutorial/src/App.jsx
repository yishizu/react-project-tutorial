import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appbar from './components/Appbar'
import WovenImageList from './components/WovenImageList'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733', // ここで AppBar の色を指定
    },
  },
});

function App() {

  return (
    
    <ThemeProvider theme={theme}>

      <Appbar />
      <Box paddingTop="64px" >
      <WovenImageList />
      </Box>
      
    </ThemeProvider>
    
  
  )
}

export default App
