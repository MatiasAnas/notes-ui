import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from './App.module.scss';

function App() {
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
        <Typography variant="h6" component="div">
          App Content
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
