import { Link } from 'react-router-dom'
import NavbarMenu from './NavbarMenu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleShowElement } from '../functions/elements'
import logo from '../assets/logo.svg'


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between px-3 bgBlue text-white py-5 w-full items-center fixed z-20 md:shadow-lg shadow-current h-24 top-0">
                <div className="flex items-center">
                    <img className='w-32 lg:w-48' src={logo} alt=""/>
                </div>
                <ul className="hidden md:grid grid-cols-4 place-items-center text-sm lg:text-base">
                    <li className="duration-300 hover:scale-110 "><Link to="/">Inicio</Link></li>
                    <li className="duration-300 hover:scale-110 "><Link to="/quienes-somos">Quienes Somos</Link></li>
                    <li className="duration-300 hover:scale-110 "><Link to="/sucursales">Sucursales</Link></li>
                    <li className="duration-300 hover:scale-110 "><Link to="/servicios">Servicios</Link></li>
                    <li className="duration-300 hover:scale-110 "><Link to="/financiamientos">Financiamientos</Link></li>
                    <li className="duration-300 hover:scale-110 "><Link to="/pagos-en-linea">Pagos en linea</Link></li>
                    <li className="duration-300 hover:scale-110 "><Link to="/responsabilidad-social">Responsabilidad Social</Link></li>
                    <li className="duration-300 hover:scale-110 "><Link to="contacto">Contacto</Link></li>
                </ul>
                <button onClick={() => {
                    const element = document.getElementById('menu') as HTMLElement
                    toggleShowElement(element)
                }} className='md:hidden'><FontAwesomeIcon icon={faBars} className='text-2xl'/></button>
            </nav>
            <NavbarMenu />
        </div>
    )
}

export default Navbar