import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../../pages/HomeScreen';

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path="*" element={<HomeScreen />} />
    </Routes>
  );
}
