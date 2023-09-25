import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Offices from "./pages/Offices"
import Contact from "./pages/Contact"
import Appointment from "./pages/Appointment"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout Element={Home}/>}/>
                <Route path="/quienes-somos" element={<Layout Element={About}/>}/>
                <Route path="/sucursales" element={<Layout Element={Offices}/>}/>
                <Route path="/cita" element={<Layout Element={Appointment}/>}/>
                <Route path="/contacto" element={<Layout Element={Contact}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App