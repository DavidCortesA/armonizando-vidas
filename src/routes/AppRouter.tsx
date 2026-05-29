import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './paths';

/* Layouts */
import MainLayout from '../layouts/MainLayout';
import ProgramLayout from '../layouts/ProgramLayout';

/* Main Pages */
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Donate from '../pages/Donate';
import Volunteer from '../pages/Volunteer';
import Gallery from '../pages/Gallery';

/* Food Bank */
import FoodBankHome from '../pages/food-bank/FoodBankHome';
import FoodBankPrograms from '../pages/food-bank/FoodBankPrograms';
import FoodBankDonate from '../pages/food-bank/FoodBankDonate';

/* Orchestra */
import OrchestraHome from '../pages/orchestra/OrchestraHome';
import OrchestraEvents from '../pages/orchestra/OrchestraEvents';
import OrchestraGallery from '../pages/orchestra/OrchestraGallery';

/* Other */
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN WEBSITE */}
        <Route element={<MainLayout />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
          <Route path={PATHS.DONATE} element={<Donate />} />
          <Route path={PATHS.VOLUNTEER} element={<Volunteer />} />
          <Route path={PATHS.GALLERY} element={<Gallery />} />
        </Route>

        {/* FOOD BANK */}
        <Route element={<ProgramLayout theme="foodBank" />}>
          <Route path={PATHS.FOOD_BANK} element={<FoodBankHome />} />
          <Route path={PATHS.FOOD_BANK_PROGRAMS} element={<FoodBankPrograms />} />
          <Route path={PATHS.FOOD_BANK_DONATE} element={<FoodBankDonate />} />
        </Route>

        {/* ORCHESTRA */}
        <Route element={<ProgramLayout theme="orchestra" />}>
          <Route path={PATHS.ORCHESTRA} element={<OrchestraHome />} />
          <Route path={PATHS.ORCHESTRA_EVENTS} element={<OrchestraEvents />} />
          <Route path={PATHS.ORCHESTRA_GALLERY} element={<OrchestraGallery />} />
        </Route>

        {/* 404 */}
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
