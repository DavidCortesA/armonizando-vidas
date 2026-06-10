import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import BancoDeAlimentos from '../pages/BancoDeAlimentos';
import Home from '../pages/Home';
import MujeresDeValor from '../pages/MujeresDeValor';
import OrquestasDelRey from '../pages/OrquestasDelRey';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/orquestas-del-rey" element={<OrquestasDelRey />} />
          <Route path="/banco-de-alimentos" element={<BancoDeAlimentos />} />
          <Route path="/mujeres-de-valor" element={<MujeresDeValor />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
