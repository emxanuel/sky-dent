import { useStore } from '@nanostores/react'
import { scrollElement, scrollZero, toggleShowElement } from '../functions.ts'
import { $car } from '../shopCarContext.ts'
const NavbarMenu = () => {
    const $cart = useStore($car)
    return (
        <ul className="flex -mt-96 duration-300 flex-col fixed w-full text-white z-10 bgBlue items-center text-lg gap-2" id='menu' onClick={() => {
            const element = document.getElementById('menu') as HTMLElement
            toggleShowElement(element)
        }}>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('home')}>Inicio</button></li>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('about')}>Quienes Somos</button></li>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('blueLife')}>Resp. Soc.</button></li>
            <li className="duration-300 hover:scale-110 "><a href="/cita" onClick={scrollZero}>Crea una Cita</a></li>
            <div className='relative duration-300 hover:scale-110 '>
                <li className=""><a href="/carrito" onClick={scrollZero}>Carrito</a></li>
                <span className='absolute -bottom-2 -right-1 bg-red-500 rounded-full text-white px-1 text-xs'>{$cart.length}</span>
            </div>
            <li className="duration-300 hover:scale-110 "><button onClick={() => scrollElement('contact')}>Contacto</button></li>
        </ul>
    )
}

export default NavbarMenu