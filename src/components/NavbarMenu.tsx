import { Link } from 'react-router-dom'
import { scrollElement } from '../functions/elements'

const NavbarMenu = () => {
    return (
        <ul className="flex -mt-96 duration-300 flex-col fixed w-full text-white z-10 bgBlue items-center" id='menu'>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('home')}>Inicio</button></li>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('about')}>Quienes Somos</button></li>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('offices')}>Sucursales</button></li>
            <li className="duration-300 hover:scale-110 "><Link to="/cita">Crea una Cita</Link></li>
            <li className="duration-300 hover:scale-110 "><Link to="/contacto">Contacto</Link></li>
        </ul>
    )
}

export default NavbarMenu