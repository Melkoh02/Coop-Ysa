import HomeRoutes from './groups/HomeRoutes';
import { Box } from '@mui/material';

export default function AppRoutes() {
  return (
    <Box sx={{ height: '100vh', width: '100%', display: 'flex', flex: 1 }}>
      <HomeRoutes />
    </Box>
  );
}
