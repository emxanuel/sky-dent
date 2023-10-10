import { Link } from 'react-router-dom'
import NavbarMenu from './NavbarMenu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scrollZero, toggleShowElement } from '../functions/elements'
import logo from '../assets/logo.svg'
import { scrollElement } from '../functions/elements'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className="flex justify-between px-3 bgBlue text-white py-5 w-full items-center fixed z-20 md:shadow-lg shadow-current h-24 top-0">
                <div className="flex items-center">
                    <img className='w-32 lg:w-48' src={logo} alt=""/>
                </div> 
                <ul className="hidden md:flex gap-10 text-sm lg:text-lg">
                    <li className="duration-300 hover:scale-110"><button onClick={() => scrollElement('home', navigate)}>Inicio</button></li>
                    <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('about', navigate)}>Quienes Somos</button></li>
                    <li className="duration-300 hover:scale-110 "><Link to="/cita" onClick={scrollZero}>Crea una Cita</Link></li>
                    <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('contact', navigate)}>Contacto</button></li>
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