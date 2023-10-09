import img from '../assets/CONTACTOS.webp'

const Footer = () => {
    return (
        <div className='flex justify-center' id='contact'>
            <img className={`${window.location.pathname === '/cita'? 'md:w-10/12 w-full' : 'w-full'} aspect-40/15`} src={img} alt="" />
        </div>
    )
}

export default Footer