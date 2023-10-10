import { Link } from 'react-router-dom'
import { scrollElement, scrollZero } from '../functions/elements'
import { useNavigate } from 'react-router-dom'

const NavbarMenu = () => {
    const navigate = useNavigate()
    return (
        <ul className="flex -mt-96 duration-300 flex-col fixed w-full text-white z-10 bgBlue items-center" id='menu'>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('home', navigate)}>Inicio</button></li>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('about', navigate)}>Quienes Somos</button></li>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('blueLife', navigate)}>Resp. Soc.</button></li>
            <li className="duration-300 hover:scale-110 "><Link to="/cita" onClick={scrollZero}>Crea una Cita</Link></li>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('contact', navigate)}>Contacto</button></li>
        </ul>
    )
}

export default NavbarMenu