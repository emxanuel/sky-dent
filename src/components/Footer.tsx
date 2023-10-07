import img from '../assets/FIRMA CONTACTOS.webp'

const Footer = () => {
    return (
        <div className='flex justify-center' id='contact'>
            <img className={`${window.location.pathname === '/cita'? 'md:w-10/12 w-full' : 'w-full'} aspect-5/2`} src={img} alt="" />
        </div>
    )
}

export default Footer