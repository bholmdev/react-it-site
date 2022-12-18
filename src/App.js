import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import './App.css';
import Header from './components/Header';
import BannerImg from "./components/BannerImg";
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from "./pages/CampsiteDetailPage";

function App() {
    return (
        <div className="App">
            <Header />
            <BannerImg />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="directory" element={<CampsitesDirectoryPage />} />
                <Route
                    path="directory/:campsiteId"
                    element={<CampsiteDetailPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;