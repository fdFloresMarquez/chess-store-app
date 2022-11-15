import { Routes, Route, Navigate } from 'react-router-dom';

import { NavBar } from '@/ui/components';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Subscription from '@/pages/Subscription';

const AppRouter: React.FC = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Subscription />} path="/subscription" />

        {/* if a non existing route is requested will redirect to Home */}
        <Route element={<Navigate to="/" />} path="/*" />
      </Routes>
    </>
  );
};

export default AppRouter;
