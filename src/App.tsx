import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout Element={Home}/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App