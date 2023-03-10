import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import './App.css';
import Header from './components/Header';
import BannerImg from "./components/BannerImg";
import Footer from './components/Footer';
import PartnersPage from "./pages/PartnersPage";
import SolutionsPage from "./pages/SolutionsPage";
import ServicesPage from "./pages/ServicesPage";
import EShopPage from "./pages/EShopPage";

function App() {
    return (
        <div className="App">
            <Header />
            <BannerImg />
            <Routes>
                <Route path="/react-it-site" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/eshop" element={<EShopPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;