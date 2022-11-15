import { Routes, Route } from 'react-router-dom';

import { NavBar } from '@/ui/components';
import Subscription from '@/pages/Subscription';
import Home from '@/pages/Home';

const AppRouter: React.FC = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Subscription />} path="/suscription" />
      </Routes>
    </>
  );
};

export default AppRouter;
