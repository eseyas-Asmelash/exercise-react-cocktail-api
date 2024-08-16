
import { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import CocktailInfoPage from './pages/CocktailInfoPage';
import Navbar from './components/Navbar';


function AppRouter(): ReactElement {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cocktail/:id" element={<CocktailInfoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
