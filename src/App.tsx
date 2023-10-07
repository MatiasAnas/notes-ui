import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Notes from './views/Notes';

import styles from './App.module.scss';
import theme from './theme';

const drawerWidth = 240;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <AppBar
          position="static"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
          className={styles.topbar}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Note Creator App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar className={styles.sidebarHeader} />
        </Drawer>
        <Box
          component="main"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
          className={styles.appContent}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Notes />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
