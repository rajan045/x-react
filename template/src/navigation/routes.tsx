import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Home } from '../pages/home/Home';
import { MainLayout } from '../components/layout/MainLayout';

export const RoutesSetup = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>} />
        </Route>
    </Routes>
  );
};
