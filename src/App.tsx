import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Offices from "./pages/Offices"
import Services from "./pages/Services"
import Financing from "./pages/Financing"
import Pays from "./pages/Pays"
import Social from "./pages/Social"
import Contact from "./pages/Contact"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout Element={Home}/>}/>
                <Route path="/quienes-somos" element={<Layout Element={About}/>}/>
                <Route path="/sucursales" element={<Layout Element={Offices}/>}/>
                <Route path="/servicios" element={<Layout Element={Services}/>}/>
                <Route path="/financiamientos" element={<Layout Element={Financing}/>}/>
                <Route path="/pagos-en-linea" element={<Layout Element={Pays}/>}/>
                <Route path="/responsabilidad-social" element={<Layout Element={Social}/>}/>
                <Route path="/contacto" element={<Layout Element={Contact}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App