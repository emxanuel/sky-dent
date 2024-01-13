import NavbarMenu from './NavbarMenu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.svg'
import { scrollElement, scrollZero, toggleShowElement } from '../functions.ts'
import { useStore } from '@nanostores/react'
import { $car } from '../shopCarContext.ts'

const Navbar = () => {
    const $cart = useStore($car)
    return (
        <div>
            <nav className="flex justify-between px-3 bgBlue text-white py-5 w-full items-center fixed z-20 md:shadow-lg shadow-current h-24 top-0">
                <div className="flex items-center">
                    <img className='w-32 lg:w-48' src={logo.src} alt="" />
                </div>
                <ul className="hidden md:flex gap-10 text-sm lg:text-lg">
                    <li className="duration-300 hover:scale-110"><button onClick={() => scrollElement('home')}>Inicio</button></li>
                    <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('about')}>Quienes Somos</button></li>
                    <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('blueLife')}>Resp. Soc.</button></li>
                    <li className="duration-300 hover:scale-110 "><a href="/cita" onClick={scrollZero}>Crea una Cita</a></li>
                    <div className='relative duration-300 hover:scale-110 '>
                        <li className=""><a href="/carrito" onClick={scrollZero}>Carrito</a></li>
                        <span className='absolute -bottom-2 -right-1 bg-red-500 rounded-full text-white px-1 text-xs'>{$cart.length}</span>
                    </div>
                    <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('contact')}>Contacto</button></li>
                </ul>
                <button onClick={() => {
                    const element = document.getElementById('menu') as HTMLElement
                    toggleShowElement(element)
                }} className='md:hidden'><FontAwesomeIcon icon={faBars} className='text-2xl' /></button>
            </nav>
            <NavbarMenu />
        </div>
    )
}

export default Navbar