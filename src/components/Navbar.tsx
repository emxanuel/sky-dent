import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="flex justify-between px-3 bg-blue-400 text-white py-5">
            <div className="flex items-center">
                <p>Logo</p>
            </div>
            <ul className="grid grid-cols-4 place-items-center">
                <li className="duration-300 hover:scale-110 "><Link to="/">Inicio</Link></li>
                <li className="duration-300 hover:scale-110 "><Link to="/quienes-somos">Quienes Somos</Link></li>
                <li className="duration-300 hover:scale-110 "><Link to="/sucursales">Sucursales</Link></li>
                <li className="duration-300 hover:scale-110 "><Link to="/servicios">Servicios</Link></li>
                <li className="duration-300 hover:scale-110 "><Link to="/financiamientos">Financiamientos</Link></li>
                <li className="duration-300 hover:scale-110 "><Link to="/pagos-en-linea">Pagos en linea</Link></li>
                <li className="duration-300 hover:scale-110 "><Link to="/responsabilidad-social">Responsabilidad Social</Link></li>
                <li className="duration-300 hover:scale-110 "><Link to="contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar