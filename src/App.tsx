import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Notes from './views/Notes';

import styles from './App.module.scss';

const App = () => {
  return (
    <Box>
      <AppBar position="static" className={styles.topbar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notes App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={styles.appContent}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};

export default App;
