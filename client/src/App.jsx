import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/home";
import About from './pages/about/About';
import Termsconditions from "./pages/terms&conditions/Terms&conditions";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms&conditions" element={<Termsconditions/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;