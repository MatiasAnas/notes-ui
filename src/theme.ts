import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Quattrocento Sans', sans-serif",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderBottom: '1px solid rgb(230, 230, 230)',
          boxShadow: 'none',
          color: 'rgb(39, 39, 39)',
        },
      },
    },
  },
});

export default theme;
