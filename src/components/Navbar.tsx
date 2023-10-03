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
                <ul className="hidden md:flex gap-10 text-sm lg:text-lg">
                    <li className="duration-300 hover:scale-110 "><a href="#home">Inicio</a></li>
                    <li className="duration-300 hover:scale-110 "><a href='#about'>Quienes Somos</a></li>
                    <li className="duration-300 hover:scale-110 "><a href="#offices">Sucursales</a></li>
                    <li className="duration-300 hover:scale-110 "><Link to="/cita">Crea una Cita</Link></li>
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