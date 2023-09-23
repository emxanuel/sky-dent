const Navbar = () => {
    return (
        <nav className="flex justify-between px-3 bg-blue-400 text-white py-5">
            <div className="flex items-center">
                <p>Logo</p>
            </div>
            <ul className="grid grid-cols-4 place-items-center">
                <li className="duration-300 hover:scale-110 "><a href="">Inicio</a></li>
                <li className="duration-300 hover:scale-110 "><a href="">Quienes Somos</a></li>
                <li className="duration-300 hover:scale-110 "><a href="">Sucursales</a></li>
                <li className="duration-300 hover:scale-110 "><a href="">Servicios</a></li>
                <li className="duration-300 hover:scale-110 "><a href="">Financiamientos</a></li>
                <li className="duration-300 hover:scale-110 "><a href="">Pagos en linea</a></li>
                <li className="duration-300 hover:scale-110 "><a href="">Responsabilidad Social</a></li>
                <li className="duration-300 hover:scale-110 "><a href="">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Navbar