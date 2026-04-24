import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footers";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;