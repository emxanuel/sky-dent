import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout Element={Home}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App