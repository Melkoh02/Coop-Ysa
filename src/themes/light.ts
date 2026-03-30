import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#fafafa', paper: '#fff' },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: 12 } } },
  },
});
