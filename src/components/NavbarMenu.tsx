import { Link } from 'react-router-dom'

const NavbarMenu = () => {
    return (
        <ul className="flex -mt-96 duration-300 flex-col absolute w-full text-white z-10 bgBlue items-center" id='menu'>
            <li className="duration-300 hover:scale-110 "><Link to="/">Inicio</Link></li>
            <li className="duration-300 hover:scale-110 "><Link to="/quienes-somos">Quienes Somos</Link></li>
            <li className="duration-300 hover:scale-110 "><Link to="/sucursales">Sucursales</Link></li>
            <li className="duration-300 hover:scale-110 "><Link to="/servicios">Servicios</Link></li>
            <li className="duration-300 hover:scale-110 "><Link to="/financiamientos">Financiamientos</Link></li>
            <li className="duration-300 hover:scale-110 "><Link to="/pagos-en-linea">Pagos en linea</Link></li>
            <li className="duration-300 hover:scale-110 "><Link to="/responsabilidad-social">Responsabilidad Social</Link></li>
            <li className="duration-300 hover:scale-110 "><Link to="contacto">Contacto</Link></li>
        </ul>
    )
}

export default NavbarMenu